import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { AppService } from '../../../app.service';
import { AuthService } from '../../../modules/auth/auth.service';

export interface TokenLoginRequest {
  username: string;
  password: string;
  grant_type: string;
  client_id: string;
}

interface MainApiTokenResponse {
  access_token?: string;
  userId?: number | string;
  userName?: string;
}

export interface JsonSaveRequest {
  lang: string;
  type_id: number;
  json: unknown;
}

export interface DuaMunajatItem {
  title?: string;
  arabic?: string;
  translate?: string;
  ref?: string;
  type?: string;
  length_arabic?: number | string;
}

export interface AyatItem {
  ayat_id?: number | string;
  sura?: number | string;
  aya?: number | string;
  suraname?: string;
  Arabic?: string;
  arabic2?: string;
  muzibur?: string;
}

export interface ContactItem {
  ContactName?: string;
  ContactNumber?: string;
  GroupID?: number | string;
  RemainderID?: number | string;
  CellOperatorID?: number | string;
}

export interface NodeItem {
  NodeID?: number | string;
  NodeKey?: string;
  NodeValue?: string;
  NodeParent?: number | string;
  ParentIndex?: number | string;
}

@Injectable({ providedIn: 'root' })
export class ApiDemoService {
  constructor(private http: HttpClient, private appService: AppService, private authService: AuthService) {}

  tokenLogin(request: TokenLoginRequest): Observable<unknown> {
    const body = new HttpParams()
      .set('username', request.username)
      .set('password', request.password)
      .set('grant_type', request.grant_type)
      .set('client_id', request.client_id);

    return this.http.post<MainApiTokenResponse>(this.url('api/token'), body.toString(), {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    }).pipe(
      tap((response) => this.storeMainApiToken(request.username, response))
    );
  }

  getSql(by: string): Observable<unknown> {
    return this.http.get(this.url(`api/sql/${encodeURIComponent(by)}`));
  }

  getDuaMunajat(): Observable<DuaMunajatItem[]> {
    return this.http.get<DuaMunajatItem[]>(this.url('api/sql/duamunajat'));
  }

  getAyat(): Observable<AyatItem[]> {
    return this.http.get<AyatItem[]>(this.url('api/sql/ayat'));
  }

  getContacts(): Observable<ContactItem[]> {
    return this.http.get<ContactItem[]>(this.url('api/sql/friend/ContactInfo'));
  }

  getNodes(): Observable<NodeItem[]> {
    return this.http.get<NodeItem[]>(this.url('api/sql/friend/NodeInfo'));
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

  refreshToken(): Observable<unknown> {
    const session = this.authService.session;
    if (!session?.refresh_token) {
      throw new Error('No refresh token available');
    }
    return this.authService.refreshAccessToken();
  }

  getZikrMe(): Observable<unknown> {
    return this.http.get(this.zikrUrl('me'));
  }

  private url(path: string): string {
    const baseUrl = this.appService.config.apiBaseUrl || '';
    return `${baseUrl}${path}`;
  }

  private zikrUrl(path: string): string {
    const baseUrl = this.appService.config.apiBaseUrl || '';
    const zikrPath = this.appService.config.zikrApiPath || 'zikr/public/api/';
    return `${baseUrl}${zikrPath}${path}`;
  }

  private storeMainApiToken(username: string, response: MainApiTokenResponse): void {
    if (!response.access_token) {
      return;
    }

    const session = this.authService.session || {};
    this.authService.setSession({
      ...session,
      id: Number(response.userId || session.id || 0) || session.id,
      uid: Number(response.userId || session.uid || 0) || session.uid,
      name: response.userName || session.name || username,
      email: session.email || username,
      token: response.access_token,
      api_access_token: response.access_token,
      permissions: session.permissions || ['api:demo']
    });
  }
}
