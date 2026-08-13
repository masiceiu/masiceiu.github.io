# Database Deployment Guide for masiceiu Frontend

## Overview
This guide explains how to set up the backend database for the masiceiu Angular frontend to work with API endpoints.

## Prerequisites
- Access to ictchdb MySQL database
- MySQL client or GUI (MySQL Workbench, phpMyAdmin, etc.)
- Backend API server running at `http://api.rnd:8000/`

## Deployment Steps

### Step 1: Configure API Client
Run **`api_client_setup.sql`** to create/configure allowed API clients.

This script:
- Creates `api_client` table (if not exists)
- Registers `masiceiu` client for development (localhost:4200)
- Registers `masiceiu-prod` client for production
- Registers `api-tester` client for testing

**Deploy:**
```sql
mysql -u root -p ictchdb < api_client_setup.sql
```

### Step 1.5: Create Refresh Tokens Table
Run **`refresh_tokens_setup.sql`** to create the token storage table.

This script:
- Creates `refresh_tokens` table for long-lived session management
- Sets up foreign key to `person` table
- Configures token expiration (30 days)
- Adds performance indexes

**Deploy:**
```sql
mysql -u root -p ictchdb < refresh_tokens_setup.sql
```

### Step 2: Create Test Users
Run **`test_users_setup.sql`** to create test users for API login.

This script creates:
- `admin` user (password: admin123, role: 3=admin)
- `testuser` user (password: user123, role: 1=user)
- `demo` user (password: demo123, role: 1=user)

**IMPORTANT:** Passwords are SHA1-hashed. Replace with your actual hashes:
```php
// In PHP: sha1('password')
// In MySQL: SHA1('password')
```

**Deploy:**
```sql
mysql -u root -p ictchdb < test_users_setup.sql
```

### Step 3: Verify Database Setup
Run verification queries to confirm setup:

```sql
-- Check API clients
SELECT * FROM api_client WHERE id IN ('masiceiu', 'masiceiu-prod', 'api-tester');

-- Check test users
SELECT id, username, email, user_role, is_active FROM person 
WHERE username IN ('admin', 'testuser', 'demo');

-- Check refresh_tokens table exists
DESCRIBE refresh_tokens;
```

## Testing the Setup

### 1. Frontend - Login
1. Navigate to `http://localhost:4200/auth/login`
2. Enter credentials:
   - Username: `admin` or `testuser` or `demo`
   - Password: `admin123` or `user123` or `demo123`
3. Click "Login"
4. Token should be stored in localStorage

### 2. Frontend - Test API Page
1. Navigate to `http://localhost:4200/my/api`
2. Click "Quick SQL Endpoints" buttons:
   - Duas → `GET /api/sql/duamunajat`
   - Ayat → `GET /api/sql/ayat`
   - Contacts → `GET /api/sql/friend/ContactInfo`
   - Nodes → `GET /api/sql/friend/NodeInfo`
3. Response should show data from backend

### 3. Testing with Curl (Manual)
```bash
# 1. Get token
curl -X POST http://api.rnd:8000/api/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "username=admin&password=admin123&client_id=masiceiu&grant_type=password"

# Response: { "access_token": "eyJ...", ... }

# 2. Call protected endpoint with token
curl -X GET http://api.rnd:8000/api/sql/duamunajat \
  -H "Authorization: Bearer eyJ..."

# Should return: [ { "title": "...", "arabic": "...", ... }, ... ]
```

## Common Issues

### "Invalid client identity" Error
**Cause:** `api_client` table missing or client not registered

**Fix:**
1. Run `api_client_setup.sql` 
2. Verify: `SELECT * FROM api_client WHERE id = 'masiceiu'`
3. Ensure `status_flag = 1` (active)

### "Invalid user ID or password" Error
**Cause:** User not found or password hash mismatch

**Fix:**
1. Run `test_users_setup.sql`
2. Verify: `SELECT * FROM person WHERE username = 'admin'`
3. Check password is SHA1-hashed correctly

### "Token rejected" on Subsequent Requests
**Cause:** Token expired (default: 15 minutes)

**Fix:**
1. Use "Refresh Token" button on API test page
2. Frontend's `SiteInterceptor` auto-refreshes when enabled
3. Check localStorage has `8c1a202ba93f2b26_login` key

### CORS Error
**Cause:** Origin not in `api_client.origin` list

**Fix:**
1. Update `api_client_setup.sql` with correct origin
2. Run SQL update
3. Verify: `SELECT origin FROM api_client WHERE id = 'masiceiu'`

## Production Deployment

### Environment Configuration
Update `src/assets/json/config.json`:
```json
{
  "apiBaseUrl": "https://api.masiceiu.com/",
  "zikrApiPath": "zikr/public/api/"
}
```

### Database Setup for Production
```bash
# Use production credentials
mysql -h prod-db-host -u prod-user -p prod_ictchdb < api_client_setup.sql
mysql -h prod-db-host -u prod-user -p prod_ictchdb < test_users_setup.sql
```

### Update API Client Origins
Edit `api_client_setup.sql` before deploying:
```sql
-- Change development origins to production URLs
INSERT INTO `api_client` VALUES (
  'masiceiu-prod',
  'Masiceiu Frontend',
  'https://masiceiu.com,https://www.masiceiu.com',
  1
);
```

## Maintenance

### Adding New API Clients
```sql
INSERT INTO `api_client` (id, name, origin, status_flag)
VALUES ('new-client', 'New App', 'https://new-app.com', 1);
```

### Deactivating Clients
```sql
UPDATE `api_client` SET status_flag = 0 WHERE id = 'masiceiu';
```

### Rotating Client Origins
```sql
UPDATE `api_client` 
SET origin = 'https://new-origin.com' 
WHERE id = 'masiceiu';
```

## Security Notes

⚠️ **IMPORTANT:**
- Never commit test user passwords to version control
- Use strong passwords in production
- Hash passwords with SHA1 or better (bcrypt recommended)
- Rotate API client secrets regularly
- Monitor api_client access logs
- Disable test clients in production

## Support

For issues with:
- **Frontend authentication:** Check [FIX_API_AUTH_ERROR.md](../../FIX_API_AUTH_ERROR.md)
- **Backend API:** Check backend logs at `h:\RND\git\apirnd\root\logs\`
- **Database:** Check MySQL error logs

## Files
- `api_client_setup.sql` - API client configuration
- `refresh_tokens_setup.sql` - Refresh token table creation
- `test_users_setup.sql` - Test user creation
- `DEPLOYMENT_GUIDE.md` - This file
