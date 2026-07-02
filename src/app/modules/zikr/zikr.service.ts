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

@Injectable({ providedIn: 'root' })
export class ZikrService {
  constructor(private http: HttpClient, private appService: AppService) {}

  save(request: SaveZikrRequest): Observable<SaveZikrResponse> {
    const urls = this.urls('save-zikr');
    return this.postWithFallback(urls, request);
  }

  private postWithFallback(urls: string[], request: SaveZikrRequest): Observable<SaveZikrResponse> {
    const [url, ...fallbackUrls] = urls;

    return this.http.post<SaveZikrResponse>(url, request).pipe(
      catchError((error: unknown) => {
        if (fallbackUrls.length === 0) {
          return throwError(() => error);
        }

        return this.postWithFallback(fallbackUrls, request);
      })
    );
  }

  private urls(route: string): string[] {
    return buildZikrApiUrls(this.appService.config || {}, route);
  }
}