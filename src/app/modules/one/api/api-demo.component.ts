import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { ApiDemoService, JsonSaveRequest, TokenLoginRequest } from './api-demo.service';
import { AuthService } from '../../../modules/auth/auth.service';

@Component({
  selector: 'api-demo-view',
  templateUrl: './api-demo.component.html',
  styleUrls: ['./api-demo.component.css']
})
export class ApiDemoComponent {
  loading = false;
  status = 'Ready';
  lastEndpoint = '';
  lastResponseText = '';
  lastError: any = null;

  tokenRequest: TokenLoginRequest = {
    username: '',
    password: '',
    grant_type: 'password',
    client_id: 'masiceiu'
  };

  sqlBy = 'duamunajat';
  sqlDb = 'friend';
  sqlTable = 'ContactInfo';
  jsonId = '';
  jsonRequestText = JSON.stringify({ demo: true, title: 'API test' }, null, 2);
  jsonLang = 'en';
  jsonTypeId = 1;
  sessionStatus = 'Not logged in';
  tokenRefreshEnabled = true;

  constructor(private apiDemoService: ApiDemoService, private authService: AuthService) {
    this.updateSessionStatus();
  }

  updateSessionStatus(): void {
    const session = this.authService.session;
    if (session?.access_token) {
      this.sessionStatus = `Logged in as: ${session.email || session.name || 'Unknown'}`;
    } else {
      this.sessionStatus = 'Not logged in';
    }
  }

  callToken(): void {
    this.call('POST /api/token', this.apiDemoService.tokenLogin(this.tokenRequest));
  }

  callRefreshToken(): void {
    this.call('POST /api/token (refresh)', this.apiDemoService.refreshToken());
  }

  callSql(): void {
    this.call(`GET /api/sql/${this.sqlBy}`, this.apiDemoService.getSql(this.sqlBy));
  }

  callSqlTable(): void {
    this.call(`GET /api/sql/${this.sqlDb}/${this.sqlTable}`, this.apiDemoService.getSqlTable(this.sqlDb, this.sqlTable));
  }

  // Shortcut endpoints
  callDuaMunajat(): void {
    this.call('GET /api/sql/duamunajat', this.apiDemoService.getDuaMunajat());
  }

  callAyat(): void {
    this.call('GET /api/sql/ayat', this.apiDemoService.getAyat());
  }

  callContacts(): void {
    this.call('GET /api/sql/friend/ContactInfo', this.apiDemoService.getContacts());
  }

  callNodes(): void {
    this.call('GET /api/sql/friend/NodeInfo', this.apiDemoService.getNodes());
  }

  callZikrMe(): void {
    this.call('GET /zikr/public/api/me', this.apiDemoService.getZikrMe());
  }

  callJson(): void {
    const endpoint = this.jsonId ? `GET /api/qurn/json/${this.jsonId}` : 'GET /api/qurn/json';
    this.call(endpoint, this.apiDemoService.getJson(this.jsonId.trim() || undefined));
  }

  saveJson(): void {
    let json: unknown;

    try {
      json = JSON.parse(this.jsonRequestText);
    } catch (error) {
      this.status = 'Invalid JSON request body';
      this.lastResponseText = this.format(error);
      return;
    }

    const request: JsonSaveRequest = {
      lang: this.jsonLang,
      type_id: this.jsonTypeId,
      json
    };

    this.call('POST /api/qurn/json', this.apiDemoService.saveJson(request));
  }

  callLegacy(): void {
    this.call('GET /api/20230115', this.apiDemoService.getLegacy20230115());
  }

  private call(endpoint: string, request$: ReturnType<ApiDemoService['getJson']>): void {
    this.loading = true;
    this.status = 'Calling API...';
    this.lastEndpoint = endpoint;
    this.lastResponseText = '';
    this.lastError = null;

    request$.subscribe({
      next: (response: unknown) => {
        this.status = 'Success';
        this.lastResponseText = this.format(response);
        this.updateSessionStatus();
      },
      error: (error: HttpErrorResponse) => {
        this.lastError = this.extractErrorDetails(error);
        this.status = `Failed (${error.status || 'network'})`;
        this.lastResponseText = this.format(error.error || error.message || error);
        
        // Handle 401 with auto-refresh
        if (error.status === 401 && this.tokenRefreshEnabled) {
          this.status = 'Token expired, attempting refresh...';
          this.authService.refreshAccessToken().subscribe({
            next: () => {
              this.status = 'Token refreshed, retrying...';
              this.updateSessionStatus();
              // Retry the original request
              setTimeout(() => this.call(endpoint, request$), 500);
            },
            error: (refreshError) => {
              this.status = 'Token refresh failed - please login again';
              this.lastError = 'Session expired. Please log in again.';
            }
          });
        }
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  private extractErrorDetails(error: HttpErrorResponse): string {
    let details = `Status: ${error.status}\n`;
    
    if (error.status === 0) {
      return 'Network error - Backend server may be down or CORS issue';
    }
    
    if (error.status === 400) {
      details += 'Bad Request - Check your parameters';
      if (error.error?.message) {
        details += `\nMessage: ${error.error.message}`;
      }
      return details;
    }
    
    if (error.status === 401) {
      return 'Unauthorized - Invalid or expired token';
    }
    
    if (error.status === 403) {
      return 'Forbidden - Insufficient permissions';
    }
    
    if (error.status === 404) {
      return 'Not Found - Endpoint does not exist';
    }
    
    if (error.status === 500) {
      return 'Server Error - Backend processing failed';
    }
    
    return error.message || 'Unknown error';
  }

  private format(value: unknown): string {
    if (typeof value === 'string') {
      return value;
    }

    return JSON.stringify(value, null, 2);
  }
}