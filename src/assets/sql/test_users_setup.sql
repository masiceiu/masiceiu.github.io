-- Test Users Setup for masiceiu API Testing
-- Deploy to: ictchdb database (MySQL)
-- Purpose: Create test users for API development and testing

-- Passwords: All test users use SHA1-hashed passwords
-- admin: sha1('admin123') = 240b9207d5b3f1c8e7c3e8c8e4f3e3e3 
-- (IMPORTANT: Use actual SHA1 values for your passwords)

-- Create person table if not exists (if using custom schema)
-- Adjust this query based on your actual person table structure

-- Test user: admin (role=3, active)
-- Check if user exists first
DELETE FROM `person` WHERE username = 'admin' AND is_active = 1;

INSERT INTO `person` (
  `username`,
  `email`,
  `password`,
  `user_role`,
  `is_active`,
  `created_at`,
  `updated_at`
) VALUES (
  'admin',
  'admin@masiceiu.test',
  SHA1('admin123'),  -- Replace with your hashed password
  3,  -- admin role
  1,  -- active
  NOW(),
  NOW()
) ON DUPLICATE KEY UPDATE
  `email` = 'admin@masiceiu.test',
  `password` = SHA1('admin123'),
  `user_role` = 3,
  `is_active` = 1,
  `updated_at` = NOW();

-- Test user: testuser (role=1, regular user, active)
DELETE FROM `person` WHERE username = 'testuser' AND is_active = 1;

INSERT INTO `person` (
  `username`,
  `email`,
  `password`,
  `user_role`,
  `is_active`,
  `created_at`,
  `updated_at`
) VALUES (
  'testuser',
  'user@masiceiu.test',
  SHA1('user123'),  -- Replace with your hashed password
  1,  -- regular user role
  1,  -- active
  NOW(),
  NOW()
) ON DUPLICATE KEY UPDATE
  `email` = 'user@masiceiu.test',
  `password` = SHA1('user123'),
  `user_role` = 1,
  `is_active` = 1,
  `updated_at` = NOW();

-- Test user: demo (role=1, demo/viewer, active)
DELETE FROM `person` WHERE username = 'demo' AND is_active = 1;

INSERT INTO `person` (
  `username`,
  `email`,
  `password`,
  `user_role`,
  `is_active`,
  `created_at`,
  `updated_at`
) VALUES (
  'demo',
  'demo@masiceiu.test',
  SHA1('demo123'),  -- Replace with your hashed password
  1,  -- regular user role
  1,  -- active
  NOW(),
  NOW()
) ON DUPLICATE KEY UPDATE
  `email` = 'demo@masiceiu.test',
  `password` = SHA1('demo123'),
  `user_role` = 1,
  `is_active` = 1,
  `updated_at` = NOW();

-- Verify test users created
SELECT 
  `id`,
  `username`,
  `email`,
  `user_role`,
  `is_active`,
  `created_at`
FROM `person`
WHERE `username` IN ('admin', 'testuser', 'demo')
ORDER BY `username`;

-- Note: Remember to replace SHA1 hashes with actual values or 
-- adjust according to your password hashing method
