import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, tap, throwError } from 'rxjs';

import { AppService } from '../../app.service';
import { buildAuthApiUrls } from '../../shared/services/api-endpoints';
import { authStorageKey, StoredAuthSession } from './auth-storage';

export interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
  refresh_token: string;
  role: string;
  permissions?: string[];
}

interface RefreshResponse {
  access_token: string;
  refresh_token?: string;
  role?: string;
  permissions?: string[];
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
    return this.postWithFallback<LoginResponse>('login', request).pipe(
      map((response) => this.toSession(request.email, response)),
      tap((session) => this.setSession(session))
    );
  }

  me(): Observable<MeResponse> {
    return this.getWithFallback<MeResponse>('me');
  }

  refreshAccessToken(): Observable<StoredAuthSession> {
    const session = this.session;
    if (!session?.refresh_token) {
      return throwError(() => new Error('No refresh token available'));
    }

    return this.postWithFallback<RefreshResponse>('refresh', { refresh_token: session.refresh_token }).pipe(
      map((response) => ({
        ...session,
        token: response.access_token,
        access_token: response.access_token,
        refresh_token: response.refresh_token || session.refresh_token,
        role: response.role || session.role,
        user_role: response.role || session.user_role,
        permissions: response.permissions || session.permissions
      })),
      tap((updatedSession) => this.setSession(updatedSession))
    );
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
      permissions: response.permissions || this.permissionsForRole(role)
    };
  }

  private permissionsForRole(role: string): string[] {
    if (role === 'admin') {
      return ['admin:members', 'api:demo', 'zikr:save'];
    }

    return ['zikr:save'];
  }

  private getWithFallback<T>(route: string): Observable<T> {
    const urls = buildAuthApiUrls(this.appService.config || {}, route);
    return this.tryGet<T>(urls);
  }

  private postWithFallback<T>(route: string, request: unknown): Observable<T> {
    const urls = buildAuthApiUrls(this.appService.config || {}, route);
    return this.tryPost<T>(urls, request);
  }

  private tryGet<T>(urls: string[]): Observable<T> {
    const [url, ...fallbackUrls] = urls;

    return this.http.get<T>(url).pipe(
      catchError((error: unknown) => {
        if (fallbackUrls.length === 0) {
          return throwError(() => error);
        }

        return this.tryGet<T>(fallbackUrls);
      })
    );
  }

  private tryPost<T>(urls: string[], request: unknown): Observable<T> {
    const [url, ...fallbackUrls] = urls;

    return this.http.post<T>(url, request).pipe(
      catchError((error: unknown) => {
        if (fallbackUrls.length === 0) {
          return throwError(() => error);
        }

        return this.tryPost<T>(fallbackUrls, request);
      })
    );
  }
}