import { Injectable, Injector } from '@angular/core';
import { 
  HttpEvent, 
  HttpHandler, 
  HttpInterceptor, 
  HttpRequest, 
  HttpResponse,
  HttpErrorResponse } from '@angular/common/http';
import { Observable, of as observableOf, throwError } from 'rxjs';
import { catchError, finalize, switchMap } from "rxjs/operators";
import { Router } from "@angular/router";

import { HttpLoading } from './http.loading';
import { GlobalData } from './shared/models/global-data';
import { AuthService } from './modules/auth/auth.service';
import { authStorageKey, StoredAuthSession } from './modules/auth/auth-storage';

const loginStorageKey = authStorageKey;
@Injectable()
export class SiteInterceptor implements HttpInterceptor {
  
  constructor(private router: Router, private httpLoading: HttpLoading, protected globalData: GlobalData, private injector: Injector) {
  //constructor(private router: Router, private httpLoading: HttpLoading, private injector: Injector) {

  }
  intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> 
  {
    //https://stackblitz.com/edit/angular-cache-and-offline-interceptor
    const key = req.urlWithParams; 
    this.httpLoading.onStarted(req);
    // emit onStarted event before request execution
    // console.log(key);
    switch(key){
      //http://api.masiceiu.com:8000/sse.php?from=masiceiu&ev=reg
      case"/api/v1/generate_uid":
        //console.log('HTTP Request for ' + req.urlWithParams + ' is being responded to locally.');
        return observableOf(new HttpResponse({ body: { "items": ["hi there! I'm in your app intercepting your requests"] }, status: 200 }));
        //case"/assets/json/config.json":
      default:
        if (localStorage.getItem(loginStorageKey) != null && !this.isAuthRoute(req.url)) {
          let login = JSON.parse((localStorage.getItem(loginStorageKey)||"{}"));
          const clonedReq = this.withAuthHeader(req, login);
          const handler = next.handle(clonedReq).pipe(
              catchError((err:any) => this.handleAuthError(err, req, next)),
              finalize(()=>
              {
                //console.log("finalize1:",req.url);
                setTimeout(() => {}, 100);
                this.httpLoading.onFinished(req);
              })
          );
          return handler;
      }
      else {
        //emit onFinished event after request execution
        const handler = next.handle(req)
        .pipe(finalize(() => {
            //console.log("finalize2:",req.url);
            setTimeout(() => {}, 100);
            this.httpLoading.onFinished(req);
          }
        ));
        return handler;
        //return this.newMethod(req,handler,this.httpLoading,key);
      }
    }
    // Or if you wanted to go to the network:
    // return next.handle(req);
  }

  private handleAuthError(err: any, req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!(err instanceof HttpErrorResponse) || err.status !== 401) {
      return throwError(() => err);
    }

    if (this.isAuthRoute(req.url)) {
      this.logout();
      return throwError(() => err);
    }

    const authService = this.injector.get(AuthService);
    return authService.refreshAccessToken().pipe(
      switchMap((session) => next.handle(this.withAuthHeader(req, session))),
      catchError((refreshError: unknown) => {
        this.logout();
        return throwError(() => refreshError);
      })
    );
  }

  private withAuthHeader(req: HttpRequest<any>, session: StoredAuthSession): HttpRequest<any> {
    const token = this.tokenForRequest(req.url, session);
    if (!token) {
      return req;
    }

    return req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + token)
    });
  }

  private tokenForRequest(url: string, session: StoredAuthSession): string {
    if (/\/api\//.test(url) && !/\/zikr\//.test(url)) {
      return session.api_access_token || '';
    }

    if (/\/zikr\//.test(url)) {
      return session.zikr_access_token || session.access_token || session.token || '';
    }

    return session.token || session.access_token || '';
  }

  private isAuthRoute(url: string): boolean {
    return /\/api\/(token|login|refresh)$/.test(url);
  }

  private logout(): void {
    localStorage.removeItem(loginStorageKey);
    this.router.navigateByUrl('/auth/login');
  }
}