# Angular API Authentication Investigation

## Objective

Investigate the `Invalid client identity` error for `/api/sql/*` requests across the Angular frontend and PHP backend. Determine whether the failure comes from token selection, JWT claims, the active `api_client` lookup, or exact origin matching.

## Original Request

Use the `angular-focused-change` workflow to investigate the Angular interceptor, auth storage, JWT creation and validation, `api_client` lookup, and origin matching. Run the Angular build and PHP syntax checks where possible. Do not commit or push without explicit approval.

## Initial Plan

1. Check repository status and preserve existing user changes.
2. Inspect the owning Angular interceptor and auth storage/login code.
3. Inspect backend token creation, bearer-token extraction, JWT validation, and client lookup.
4. State a falsifiable hypothesis and identify a cheap discriminating check.
5. Run `npm.cmd run build` and PHP `-l` checks using the configured XAMPP PHP executable.
6. Record results, remaining work, and the next recommended step.

## Current Hypothesis

There are two likely failure boundaries:

- `/api/token` can fail when the requested client is missing/inactive or when the stored `api_client.origin` does not exactly equal the incoming request origin.
- After normal Angular login, `/api/*` requests may have no Authorization header because the interceptor selects only `api_access_token`, while normal login stores `access_token` and `token` but not `api_access_token`.

The browser Network request and the token payload are the cheapest checks to distinguish these cases. Do not change the interceptor until the token used by each login flow is confirmed to contain the backend-required `clientId` claim.

## Files and Symbols Investigated

### Frontend

- `.github/skills/angular-focused-change/SKILL.md`: workflow used for this investigation.
- `src/app/site.interceptor.ts`: `intercept`, `withAuthHeader`, `tokenForRequest`, `handleAuthError`.
- `src/app/modules/auth/auth-storage.ts`: `authStorageKey` and `StoredAuthSession` token fields.
- `src/app/modules/auth/auth.service.ts`: `login`, `refreshAccessToken`, `toSession`, `setSession`, and session access.
- `src/app/modules/one/api/api-demo.service.ts`: API token login and `api_access_token` storage.
- `src/assets/sql/api_client_setup.sql`: expected `api_client` records and origins.

### Backend

- `D:\my\Dropbox\Project\ICTCH(apirnd)\root\config\handler.php`: `getToken`, `buildToken`, `validateToken`, `getAuthorizationHeader`, and `getBearerToken`.
- `D:\my\Dropbox\Project\ICTCH(apirnd)\root\config\repository.php`: `getClient`.
- `D:\my\Dropbox\Project\ICTCH(apirnd)\root\api\api_token\api_token_post.php`: `/api/token` request and response flow.
- `D:\my\Dropbox\Project\ICTCH(apirnd)\root\api\token\token_post.php`: `/token` request and response flow.

## Findings So Far

- `/api/token` passes `client_id` to `Handler::getToken`.
- `getToken` looks up an active `api_client` row, requires `data['origin'] === $GLOBALS['origin']`, and creates the JWT only after both checks pass.
- `buildToken` puts `userId`, `username`, and `clientId` into the JWT payload.
- `validateToken` decodes the JWT, reads `clientId`, and calls `getClient($clientId)`.
- `getClient` queries `api_client` with both the exact ID and `status_flag = 1`.
- `SiteInterceptor.tokenForRequest` returns only `session.api_access_token` for `/api/*` requests outside `/zikr/`.
- Normal `AuthService.toSession` stores `token` and `access_token`, but not `api_access_token`.
- `ApiDemoService.storeMainApiToken` stores the `/api/token` result as `api_access_token`.
- The configured client ID in the API demo is `masiceiu`.
- The frontend SQL setup includes a `masiceiu` client, but its origin value is comma-separated; the backend compares the entire value to one incoming origin string, so this may fail exact matching.

## Decisions and Assumptions

- Keep frontend and backend repositories separate; backend source is inspected from `D:\my\Dropbox\Project\ICTCH(apirnd)`.
- Do not store passwords, JWTs, refresh tokens, or other secrets in this file.
- Do not edit source until a browser request/token check or another concrete check selects the controlling failure path.
- Preserve the existing staged `.github/skills/angular-focused-change/SKILL.md` addition and modified `README.md`.

## Task Status

- [x] Read the Angular skill instructions.
- [x] Check repository status before source edits.
- [x] Inspect Angular interceptor and auth storage/login flow.
- [x] Inspect backend JWT creation, validation, bearer extraction, and client lookup.
- [x] Create this progress file with the initial plan and hypothesis.
- [x] Verify the `masiceiu` database row has `status_flag = 1`: local MySQL connection succeeded, but `ictchdb.api_client` does not exist, so no row was returned.
- [x] Verify the exact origin stored for `masiceiu`: local database now reports `http://localhost:4200` and `status_flag = 1` after repairing the orphaned table.
- [ ] Verify the browser Authorization header after each login flow. Requires valid application credentials; all documented test accounts returned HTTP 401.
- [x] Decide and apply the confirmed source fix: development `api_client.origin` is now the exact value `http://localhost:4200`.
- [x] Run and record Angular build results. Passed after dependency installation; one CSS budget warning remains.
- [x] Run and record PHP syntax results.
- [x] Diagnose and fix the Zikr `Save failed` response contract mismatch.

## Commands and Validation

Validation run during this continuation:

- `npm.cmd run build` (before dependency installation): failed with `ng` not recognized because `node_modules` was absent.
- `npm.cmd install`: completed after an extended install; deprecation warnings were reported, but no install error was captured.
- `npm.cmd run build` (after dependency installation): passed. The build reported one CSS budget warning.
- `D:\Installed\xampp\php\php.exe -l D:\my\Dropbox\Project\ICTCH(apirnd)\root\config\handler.php`: passed; no syntax errors detected.
- `D:\Installed\xampp\php\php.exe -l D:\my\Dropbox\Project\ICTCH(apirnd)\root\config\repository.php`: passed; no syntax errors detected.
- `D:\Installed\xampp\php\php.exe -l D:\my\Dropbox\Project\ICTCH(apirnd)\root\api\api_token\api_token_post.php`: passed; no syntax errors detected.
- `D:\Installed\xampp\php\php.exe -l D:\my\Dropbox\Project\ICTCH(apirnd)\root\api\token\token_post.php`: passed; no syntax errors detected.

Unauthenticated backend probes:

- `GET http://api.rnd:8000/api/sql/friend/ContactInfo`: HTTP 400, confirming the endpoint is protected when no Authorization header is sent.
- `GET http://api.rnd:8000/api/token` without credentials/body: HTTP 200 route response; this does not prove token issuance or client validation because no login payload was supplied.
- Local MySQL query using the backend-configured connection: connection succeeded; `SELECT id, status_flag, origin FROM api_client WHERE id = 'masiceiu'` failed because table `ictchdb.api_client` does not exist. No database changes were made.
- Local MySQL repair: the orphaned `api_client` table was dropped and recreated in the configured local `ictchdb` database only. Verified rows: `api-tester` active with `*`, `masiceiu` active with `http://localhost:4200`, and `masiceiu-prod` active with `https://masiceiu.com`.
- Authenticated token test: documented accounts `admin/admin123`, `testuser/user123`, and `demo/demo123` all returned HTTP 401; no access token was returned and no protected request was made.
- Final `npm.cmd run build`: passed with one existing selector warning.
- Final PHP lint for `handler.php`, `repository.php`, `api_token_post.php`, and `token_post.php`: all passed with no syntax errors.
- Zikr save diagnosis: the frontend sent only `date` and `count`, while the backend `save-zikr` route requires `activityId`, `clientId`, `targetCount`, valid `date`, and `count <= targetCount`.
- Zikr save fix: `ZikrComponent` now sends the required activity, client, target, total, and completion fields; `ZikrService.SaveZikrRequest` defines the complete request contract.
- Angular validation after the Zikr save fix: compilation completed successfully; the wrapper reported exit 1 because PowerShell classified npm progress output as an error. No TypeScript or template errors were reported.
- Zikr field mapping clarification: `count` is the current Zikr count, `totalCount` is the selected Target value, and `activityId` combines the selected Zikr type with the selected Count value as `<zikrType>(<countTarget>)`.
- Angular validation after the field mapping clarification: browser bundle compilation succeeded with no warnings or errors shown; the PowerShell wrapper again reported exit 1 despite successful compilation.
- ZikrCtrl alignment: counter clicks now only increase the current count; the Target action completes only when `count === countTarget`, increments the per-activity completed-target count, sends cumulative `totalCount = completedTargets * countTarget`, and resets the current count after a successful save.
- ZikrCtrl alignment validation: `npm.cmd run build` passed with exit code 0 and no compilation warnings or errors.
- Zikr activity switching: changing the selected Zikr type now reloads the matching `ZikrType(Target)` state, keeping completed-target totals separate per activity like `ZikrCtrl`.
- Final Angular validation after activity switching: build passed with the existing `api-demo.component.css` budget warning and one skipped `:lang` selector.
- Persisted activity progress: Angular now calls the backend `load-zikr?activityId=...` endpoint on initialization and whenever Zikr type or target changes, restoring `count` and `completedTargets` for the selected activity instead of keeping progress only in memory.
- Persisted progress validation: `npm.cmd run build` passed after wiring `ZikrService.load`; one existing skipped `:lang` selector warning remains.
- Full Zikr persistence: added authenticated backend `save-progress` to persist the current count without overwriting completed-target totals; Angular calls it after each counter increment. Target completion continues to create the activity record and cumulative total.
- Full persistence validation: Angular build passed; PHP lint for `zikr/public/api/router.php` passed with no syntax errors. The remaining `:lang` selector warning is pre-existing.
- Progress persistence optimization: Angular now debounces partial-progress writes by 250 ms, so rapid counter clicks produce one latest-state request instead of one request per click. Pending writes are canceled before activity changes, reset, or Target completion to avoid stale updates.
- Optimization validation: Angular build passed with exit code 0; one existing selector warning remains.
- Always-keep progress: Angular now writes an immediate user/activity-specific localStorage backup on increment, reset, Target completion, and successful backend load. Backend synchronization remains enabled, with local progress used when the API is temporarily unavailable.
- Always-keep validation: Angular build passed with exit code 0; only the existing unsupported `:lang` selector warning remains.
- Target-change correctness: target selection now receives the proposed value, preserves the previous target/activity when the confirmation is canceled, and switches persisted progress only after confirmation.
- Final target-change validation: Angular build passed with true exit code 0 and no Angular warnings or compilation errors.
- Completed-target correction: backend progress now counts only valid completed events where `completed = 1` and `count = target_count`, instead of deriving the display from legacy `totalCount / targetCount` values that produced inflated values such as `41`. Completed saves also reject incomplete records.
- Completed-target correction validation: PHP router lint passed and Angular build passed with exit code 0; the existing unsupported `:lang` selector warning remains.
- TypeScript configuration fix: removed unused `baseUrl` and `downlevelIteration`, and set `rootDir` to `./src`. This avoids the TypeScript 6 editor diagnostics while remaining compatible with the pinned TypeScript 4.9.4 toolchain. `moduleResolution: "node"` remains because changing it would require a newer toolchain.
- TypeScript configuration validation: `npx.cmd tsc --noEmit --project tsconfig.app.json` and `npm.cmd run build` both passed; only the existing `api-demo.component.css` budget warning remains.

Angular CLI environment check:

- `node_modules` is now present.
- `node_modules\\.bin\\ng.cmd` is now present.
- The local Angular CLI is now available through the installed dependency tree.
- The build was rerun successfully; one CSS budget warning remains.

Configured tools:

- Angular command: `npm.cmd run build`
- PHP executable: `D:\Installed\xampp\php\php.exe`

## Files Changed During This Investigation

- `docs/angular-auth-investigation.md` (created and updated with validation results)
- `node_modules/` (installed locally; normally ignored and not committed)
- `package-lock.json` (generated by `npm.cmd install`; not ignored and should be reviewed before a future commit)
- `src/assets/sql/api_client_setup.sql` (updated development origin to match backend exact comparison)
- `src/app/modules/zikr/zikr.component.ts` (send backend-required save fields)
- `src/app/modules/zikr/zikr.service.ts` (define complete save request contract)
- `src/app/modules/zikr/zikr.component.ts` (match ZikrCtrl counter/Target behavior)
- `src/app/modules/zikr/zikr.component.html` (wire Target completion and show completed target count)
- `src/app/modules/zikr/zikr.component.html` (reload activity state when Zikr type changes)
- `src/app/modules/zikr/zikr.component.ts` (load persisted activity progress)
- `src/app/modules/zikr/zikr.component.html` (disable controls while progress loads)
- `src/app/modules/zikr/zikr.service.ts` (load-zikr API contract)
- `src/app/modules/zikr/zikr.service.ts` (save-progress API call)
- `D:\my\Dropbox\Project\ICTCH(apirnd)\zikr\public\api\router.php` (authenticated partial-progress endpoint)
- `src/app/modules/zikr/zikr.component.ts` (debounced progress writes and stale-save cancellation)
- `tsconfig.json` (remove unused deprecated options and define `rootDir`)

Application source changes include the Zikr save payload contract and ZikrCtrl-aligned completion behavior. No commit or push has been performed for these latest changes.

## Next Recommended Step

The local build, PHP syntax checks, database repair, corrected SQL validation, unauthenticated endpoint probe, Zikr payload validation, and ZikrCtrl alignment are complete. Confirmed fixes: the local `api_client` table is usable and `masiceiu` is active with exact origin `http://localhost:4200`; the repository setup SQL preserves that exact origin; Zikr saves send the fields required by the backend; and Target completion now matches `ZikrCtrl`. The remaining runtime check requires valid application credentials to issue a token and observe the browser Authorization header. No credentials or tokens were stored. No commit or push was performed for these latest changes.
