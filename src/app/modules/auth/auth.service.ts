import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

import { AppService } from '../../app.service';
import { authStorageKey, StoredAuthSession } from './auth-storage';

export interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
  refresh_token: string;
  role: string;
}

interface MeResponse {
  user?: {
    uid?: number;
    id?: number;
    email?: string;
    role?: string;
  };
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient, private appService: AppService) {}

  login(request: LoginRequest): Observable<StoredAuthSession> {
    return this.http.post<LoginResponse>(this.authUrl('login'), request).pipe(
      map((response) => this.toSession(request.email, response)),
      tap((session) => this.setSession(session))
    );
  }

  me(): Observable<MeResponse> {
    return this.http.get<MeResponse>(this.authUrl('me'));
  }

  logout(): void {
    localStorage.removeItem(authStorageKey);
  }

  get session(): StoredAuthSession | null {
    const value = localStorage.getItem(authStorageKey);
    if (!value) {
      return null;
    }

    try {
      return JSON.parse(value) as StoredAuthSession;
    } catch {
      localStorage.removeItem(authStorageKey);
      return null;
    }
  }

  get isLoggedIn(): boolean {
    return !!this.session?.token;
  }

  get role(): string {
    return this.session?.role || this.session?.user_role || '';
  }

  hasPermission(permission: string): boolean {
    const session = this.session;
    if (!session) {
      return false;
    }

    if (this.role === 'admin') {
      return true;
    }

    return (session.permissions || []).includes(permission);
  }

  hasAnyPermission(permissions: string[]): boolean {
    return permissions.length === 0 || permissions.some((permission) => this.hasPermission(permission));
  }

  setSession(session: StoredAuthSession): void {
    localStorage.setItem(authStorageKey, JSON.stringify(session));
    this.appService.loadLoginInfo();
  }

  private toSession(email: string, response: LoginResponse): StoredAuthSession {
    const role = response.role || 'user';

    return {
      email,
      name: email,
      token: response.access_token,
      access_token: response.access_token,
      refresh_token: response.refresh_token,
      role,
      user_role: role,
      permissions: this.permissionsForRole(role)
    };
  }

  private permissionsForRole(role: string): string[] {
    if (role === 'admin') {
      return ['admin:members', 'api:demo', 'zikr:save'];
    }

    return ['zikr:save'];
  }

  private authUrl(route: string): string {
    const config = this.appService.config || {};
    const authBaseUrl = config.authApiBaseUrl || config.zikrApiBaseUrl;

    if (authBaseUrl) {
      return `${authBaseUrl}${route}`;
    }

    return `${config.apiBaseUrl || ''}api/${route}`;
  }
}