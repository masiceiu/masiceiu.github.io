export const authStorageKey = '8c1a202ba93f2b26_login';

export interface StoredAuthSession {
  id?: number;
  uid?: number;
  name?: string;
  email?: string;
  token?: string;
  access_token?: string;
  api_access_token?: string;
  zikr_access_token?: string;
  refresh_token?: string;
  role?: string;
  user_role?: string;
  permissions?: string[];
}