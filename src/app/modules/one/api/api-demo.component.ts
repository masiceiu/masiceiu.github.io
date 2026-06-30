import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { ApiDemoService, JsonSaveRequest, TokenLoginRequest } from './api-demo.service';

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

  constructor(private apiDemoService: ApiDemoService) {}

  callToken(): void {
    this.call('POST /api/token', this.apiDemoService.tokenLogin(this.tokenRequest));
  }

  callSql(): void {
    this.call(`GET /api/sql/${this.sqlBy}`, this.apiDemoService.getSql(this.sqlBy));
  }

  callSqlTable(): void {
    this.call(`GET /api/sql/${this.sqlDb}/${this.sqlTable}`, this.apiDemoService.getSqlTable(this.sqlDb, this.sqlTable));
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

    request$.subscribe({
      next: (response: unknown) => {
        this.status = 'Success';
        this.lastResponseText = this.format(response);
      },
      error: (error: HttpErrorResponse) => {
        this.status = `Failed (${error.status || 'network'})`;
        this.lastResponseText = this.format(error.error || error.message || error);
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  private format(value: unknown): string {
    if (typeof value === 'string') {
      return value;
    }

    return JSON.stringify(value, null, 2);
  }
}