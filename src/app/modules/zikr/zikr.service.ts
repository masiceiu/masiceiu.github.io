import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { AppService } from '../../app.service';
import { buildZikrApiUrls } from '../../shared/services/api-endpoints';

export interface SaveZikrRequest {
  date: string;
  count: number;
}

export interface SaveZikrResponse {
  success?: boolean;
  error?: string;
}

export interface AdminMember {
  id?: number | string;
  email: string;
  role: string;
  permissions?: string[];
}

export interface AdminMembersResponse {
  data?: AdminMember[];
  error?: string;
}

export interface AdminMemberRequest {
  email: string;
  password?: string;
  role: string;
  permissions?: string[];
}

export interface AdminMemberSaveResponse {
  success?: boolean;
  id?: number | string;
  error?: string;
}

@Injectable({ providedIn: 'root' })
export class ZikrService {
  constructor(private http: HttpClient, private appService: AppService) {}

  save(request: SaveZikrRequest): Observable<SaveZikrResponse> {
    const urls = this.urls('save-zikr');
    return this.postWithFallback<SaveZikrResponse>(urls, request);
  }

  getMembers(): Observable<AdminMembersResponse> {
    return this.getWithFallback<AdminMembersResponse>(this.urls('admin/members'));
  }

  createMember(request: AdminMemberRequest): Observable<AdminMemberSaveResponse> {
    return this.postWithFallback<AdminMemberSaveResponse>(this.urls('admin/members'), request);
  }

  updateMember(id: number | string, request: AdminMemberRequest): Observable<AdminMemberSaveResponse> {
    return this.putWithFallback<AdminMemberSaveResponse>(this.urls(`admin/members/${id}`), request);
  }

  private getWithFallback<T>(urls: string[]): Observable<T> {
    const [url, ...fallbackUrls] = urls;

    return this.http.get<T>(url).pipe(
      catchError((error: unknown) => {
        if (fallbackUrls.length === 0) {
          return throwError(() => error);
        }

        return this.getWithFallback<T>(fallbackUrls);
      })
    );
  }

  private postWithFallback<T>(urls: string[], request: unknown): Observable<T> {
    const [url, ...fallbackUrls] = urls;

    return this.http.post<T>(url, request).pipe(
      catchError((error: unknown) => {
        if (fallbackUrls.length === 0) {
          return throwError(() => error);
        }

        return this.postWithFallback<T>(fallbackUrls, request);
      })
    );
  }

  private putWithFallback<T>(urls: string[], request: unknown): Observable<T> {
    const [url, ...fallbackUrls] = urls;

    return this.http.put<T>(url, request).pipe(
      catchError((error: unknown) => {
        if (fallbackUrls.length === 0) {
          return throwError(() => error);
        }

        return this.putWithFallback<T>(fallbackUrls, request);
      })
    );
  }

  private urls(route: string): string[] {
    return buildZikrApiUrls(this.appService.config || {}, route);
  }
}