-- API Client Setup for masiceiu Frontend
-- Deploy to: ictchdb database (MySQL)
-- Purpose: Configure allowed API clients and their CORS origins

-- Create api_client table if not exists
CREATE TABLE IF NOT EXISTS `api_client` (
  `id` varchar(64) NOT NULL PRIMARY KEY COMMENT 'Unique client identifier',
  `name` varchar(255) DEFAULT NULL COMMENT 'Client display name',
  `description` varchar(500) DEFAULT NULL COMMENT 'Client description',
  `origin` varchar(255) DEFAULT NULL COMMENT 'CORS origin whitelist (comma-separated)',
  `status_flag` int(11) DEFAULT 1 COMMENT '1=active, 0=inactive',
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `metadata` json DEFAULT NULL COMMENT 'Additional client metadata',
  INDEX `idx_status` (`status_flag`),
  INDEX `idx_created` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Development: masiceiu frontend client
DELETE FROM `api_client` WHERE id = 'masiceiu';
INSERT INTO `api_client` (`id`, `name`, `description`, `origin`, `status_flag`, `metadata`)
VALUES (
  'masiceiu',
  'Masiceiu Angular Frontend',
  'Frontend SPA running on localhost:4200',
  'http://localhost:4200,http://localhost:4200/',
  1,
  JSON_OBJECT(
    'environment', 'development',
    'app_type', 'angular-spa',
    'features', JSON_ARRAY('api:demo', 'sql:read', 'json:read', 'json:save', 'zikr:access')
  )
);

-- Production: masiceiu frontend client
INSERT INTO `api_client` (`id`, `name`, `description`, `origin`, `status_flag`, `metadata`)
VALUES (
  'masiceiu-prod',
  'Masiceiu Angular Frontend (Production)',
  'Frontend SPA running on masiceiu.com',
  'https://masiceiu.com,https://www.masiceiu.com,https://masiceiu.github.io',
  1,
  JSON_OBJECT(
    'environment', 'production',
    'app_type', 'angular-spa',
    'features', JSON_ARRAY('api:demo', 'sql:read', 'json:read', 'json:save', 'zikr:access')
  )
) ON DUPLICATE KEY UPDATE 
  `name` = 'Masiceiu Angular Frontend (Production)',
  `origin` = 'https://masiceiu.com,https://www.masiceiu.com,https://masiceiu.github.io',
  `status_flag` = 1;

-- API Tester client (for testing)
DELETE FROM `api_client` WHERE id = 'api-tester';
INSERT INTO `api_client` (`id`, `name`, `description`, `origin`, `status_flag`, `metadata`)
VALUES (
  'api-tester',
  'API Tester Client',
  'For testing API endpoints with Postman/curl',
  '*',
  1,
  JSON_OBJECT(
    'environment', 'development',
    'app_type', 'test-client',
    'features', JSON_ARRAY('api:demo', 'sql:read', 'json:read', 'json:save', 'zikr:access', 'admin:members')
  )
);

-- Verify setup
SELECT 
  `id`,
  `name`,
  `status_flag`,
  `origin`,
  `created_at`
FROM `api_client`
WHERE `id` IN ('masiceiu', 'masiceiu-prod', 'api-tester')
ORDER BY `id`;
