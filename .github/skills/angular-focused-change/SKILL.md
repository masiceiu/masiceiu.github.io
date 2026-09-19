---
name: angular-focused-change
description: "Use when making or reviewing a focused change in this Angular 15 application, especially components, services, routing, authentication, HTTP interceptors, or API integrations. Guides local code-path investigation, minimal edits, and behavior-scoped validation."
argument-hint: "Describe the Angular behavior, file, symbol, or failing check to change"
user-invocable: true
disable-model-invocation: false
---

# Focused Angular Change

## Outcome

Produce a small, testable change that addresses the requested behavior at the code path that actually controls it, while preserving unrelated work in the repository.

## Use When

- Fixing or extending an Angular component, service, module, guard, interceptor, route, or API integration.
- Investigating a failing build, test, navigation flow, authentication flow, or HTTP request.
- Reviewing a proposed change for regressions and missing validation.

## Procedure

1. Identify the strongest local anchor: a named file, symbol, failing behavior, test, command, or nearby implementation.
2. Read only the owning implementation and one nearby test, call site, or dependency needed to understand the control flow.
3. State one falsifiable hypothesis about the current behavior and one cheap check that could disconfirm it. If the anchor only forwards or registers behavior, follow one hop to the code that computes or mutates it.
4. Choose the smallest edit that tests the hypothesis. Preserve existing public APIs, Angular patterns, and unrelated user changes. Do not refactor adjacent code unless it is required for correctness.
5. Immediately run the narrowest useful validation after the first substantive edit:
   - A focused existing test, when available.
   - Otherwise `npm run build` for template, TypeScript, routing, or dependency changes.
   - For unit tests, use `npm test -- --watch=false --browsers=ChromeHeadless` when the environment supports headless Chrome.
6. If validation fails, decide whether it supports the hypothesis or points to a different controlling path. Repair the same slice and rerun the same check before expanding the search.
7. For authentication, guards, interceptors, or API changes, verify both success and failure paths, including token absence or expiry, HTTP errors, and loading/cache behavior where applicable.
8. For routing or component changes, verify the relevant route/module boundary, template compilation, navigation state, and any permission or lazy-loading behavior.
9. Finish with an executable post-edit check and report the files changed, the behavior verified, and any remaining test or environment limitation.

## Completion Criteria

- The controlling code path is identified rather than only a forwarding or registration layer.
- The change is minimal and scoped to the requested behavior.
- At least one focused executable validation has passed, or the exact blocker is reported.
- Relevant success, failure, and boundary behavior has been considered.
- Existing unrelated changes remain untouched.
