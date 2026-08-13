-- Create refresh_tokens table for ictchdb (MySQL)
-- Deploy to: ictchdb database
-- Purpose: Store refresh tokens for long-lived sessions

CREATE TABLE IF NOT EXISTS `refresh_tokens` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'Unique token ID',
  `user_id` int(11) NOT NULL COMMENT 'Foreign key to person.id',
  `token` varchar(255) NOT NULL UNIQUE COMMENT 'Refresh token value (64-char hex string)',
  `expires_at` timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP + INTERVAL 30 DAY) COMMENT 'Token expiration (30 days)',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Token creation time',
  `revoked` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0=valid, 1=revoked',
  
  -- Foreign key constraint
  CONSTRAINT `fk_refresh_tokens_user_id` FOREIGN KEY (`user_id`) 
    REFERENCES `person` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  
  -- Indexes for performance
  INDEX `idx_user_id` (`user_id`),
  INDEX `idx_token` (`token`),
  INDEX `idx_expires_at` (`expires_at`),
  INDEX `idx_revoked` (`revoked`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci 
COMMENT='OAuth refresh token storage for long-lived sessions';

-- Cleanup: Remove expired tokens
-- This can be run periodically (e.g., via cron job)
-- DELETE FROM `refresh_tokens` WHERE expires_at < NOW() OR revoked = 1;

-- Verify table creation
SELECT TABLE_NAME, COLUMN_NAME, DATA_TYPE, COLUMN_KEY 
FROM INFORMATION_SCHEMA.COLUMNS 
WHERE TABLE_SCHEMA = 'ictchdb' AND TABLE_NAME = 'refresh_tokens'
ORDER BY ORDINAL_POSITION;
