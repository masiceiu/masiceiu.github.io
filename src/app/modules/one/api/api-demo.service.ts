import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppService } from '../../../app.service';

export interface TokenLoginRequest {
  username: string;
  password: string;
  grant_type: string;
  client_id: string;
}

export interface JsonSaveRequest {
  lang: string;
  type_id: number;
  json: unknown;
}

@Injectable({ providedIn: 'root' })
export class ApiDemoService {
  constructor(private http: HttpClient, private appService: AppService) {}

  tokenLogin(request: TokenLoginRequest): Observable<unknown> {
    const body = new HttpParams()
      .set('username', request.username)
      .set('password', request.password)
      .set('grant_type', request.grant_type)
      .set('client_id', request.client_id);

    return this.http.post(this.url('api/token'), body.toString(), {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    });
  }

  getSql(by: string): Observable<unknown> {
    return this.http.get(this.url(`api/sql/${encodeURIComponent(by)}`));
  }

  getSqlTable(db: string, table: string): Observable<unknown> {
    return this.http.get(this.url(`api/sql/${encodeURIComponent(db)}/${encodeURIComponent(table)}`));
  }

  getJson(id?: string): Observable<unknown> {
    const path = id ? `api/qurn/json/${encodeURIComponent(id)}` : 'api/qurn/json';
    return this.http.get(this.url(path));
  }

  saveJson(request: JsonSaveRequest): Observable<unknown> {
    return this.http.post(this.url('api/qurn/json'), request);
  }

  getLegacy20230115(): Observable<unknown> {
    return this.http.get(this.url('api/20230115'));
  }

  private url(path: string): string {
    const baseUrl = this.appService.config.apiBaseUrl || '';
    return `${baseUrl}${path}`;
  }
}