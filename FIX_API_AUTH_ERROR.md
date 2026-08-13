# Fix: "Invalid client identity" Error on /api/sql/* Endpoints

## Problem
When calling `/api/sql/friend/ContactInfo` (or other API endpoints), you receive:
```json
{
  "status": false,
  "response": 400,
  "message": "Invalid client identity."
}
```

## Root Cause
The backend requires a valid JWT token in the `Authorization` header. The error occurs when:
1. **No token sent** - User not logged in, no token in localStorage
2. **Invalid token** - Token is malformed or corrupted
3. **Invalid clientId** - Token's `clientId` doesn't exist in backend `api_client` database table
4. **Inactive client** - Client record exists but `status_flag ≠ 1`

## Solution

### Step 1: Verify You Are Logged In (Frontend)
The frontend's `SiteInterceptor` automatically adds the token to all requests from localStorage key `8c1a202ba93f2b26_login`.

**Check in browser console:**
```javascript
localStorage.getItem('8c1a202ba93f2b26_login')
// Should return JSON with: { token: "eyJ...", access_token: "eyJ...", ... }
```

**If empty:**
- Navigate to `/auth/login`
- Enter valid credentials
- System stores token automatically

### Step 2: Verify Token Format
The stored token should be a JWT with structure: `header.payload.signature`

**Decode and check payload contains:**
```json
{
  "clientId": "some-client-id",
  "userId": "user-id",
  "username": "username",
  ...
}
```

### Step 3: Configure Backend Database (IMPORTANT)
The backend looks up the `clientId` from your JWT in the `api_client` table. **This table must exist and have your client registered.**

**Location:** Backend database (check your database connection in `root/config/config.php`)

**Required SQL:**
```sql
-- Check if client exists
SELECT id, status_flag FROM api_client WHERE id = 'your-client-id';

-- If NOT found, INSERT new client record:
INSERT INTO api_client (id, status_flag, name, origin) 
VALUES ('your-client-id', 1, 'masiceiu-frontend', 'http://localhost:4200');

-- If found but status_flag = 0, UPDATE it:
UPDATE api_client SET status_flag = 1 WHERE id = 'your-client-id';
```

### Step 4: What is "clientId"?
The `clientId` in your JWT token must match a record in the backend `api_client` table.

**Where does clientId come from?**
- Generated at login time by backend endpoint `/api/token` or `/auth/login`
- Returned in JWT token payload
- Backend then uses it to look up client details

**How to find your current clientId:**
1. Login to the frontend
2. Open browser DevTools → Console
3. Run: `JSON.parse(localStorage.getItem('8c1a202ba93f2b26_login'))`
4. Look for `clientId` field in the output

### Step 5: Test the Fix

#### Test 1: Verify Token is Sent
```bash
# Check Authorization header is being sent
curl -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  http://api.rnd:8000/api/sql/friend/ContactInfo
```

#### Test 2: Login Endpoint (Should Return Valid Token)
```bash
curl -X POST http://api.rnd:8000/api/token \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password"}'
```

Expected response:
```json
{
  "status": true,
  "response": 200,
  "data": {
    "access_token": "eyJhbGci...",
    "refresh_token": "...",
    "clientId": "your-client-id",
    "userId": "...",
    "username": "..."
  }
}
```

#### Test 3: Verify Client in Database
**Backend MySQL/SQLite:**
```sql
-- Check if your client is registered and active
SELECT * FROM api_client WHERE id = 'your-client-id';
-- Should show: id, status_flag=1, and other fields
```

## Quick Checklist

- [ ] User is logged in (check localStorage has token)
- [ ] Token is valid JWT (not expired, not malformed)
- [ ] Token's `clientId` field exists
- [ ] Backend database `api_client` table has matching record
- [ ] That record has `status_flag = 1` (active)
- [ ] Frontend's `SiteInterceptor` is adding `Authorization: Bearer <token>` header

## Files Involved

### Frontend
- [src/app/site.interceptor.ts](../src/app/site.interceptor.ts) - Adds Authorization header
- [src/app/modules/auth/auth-storage.ts](../src/app/modules/auth/auth-storage.ts) - StorageKey: `8c1a202ba93f2b26_login`
- [src/app/modules/auth/auth.service.ts](../src/app/modules/auth/auth.service.ts) - Login/refresh logic

### Backend
- `h:\RND\git\apirnd\root\config\handler.php` (line 413) - Returns "Invalid client identity" error
- `h:\RND\git\apirnd\root\config\handler.php` (line 330-347) - `getBearerToken()` function
- `h:\RND\git\apirnd\root\config\handler.php` (line 350-413) - `validateToken()` function  
- `h:\RND\git\apirnd\root\config\repository.php` (line 43-58) - `getClient()` - Queries `api_client` table

## Alternative: Bypass for Testing

**NOT RECOMMENDED FOR PRODUCTION**, but if you need to test the endpoint without auth:

Edit backend `api_root.php` to add:
```php
// Temporary: Skip auth for testing
if ($_SERVER['REQUEST_URI'] === '/api/sql/friend/ContactInfo') {
    // Allow without token
} else {
    validateToken(); // Normal auth
}
```

Then remove this after testing.
