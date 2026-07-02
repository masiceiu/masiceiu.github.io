import { Injectable, Injector } from '@angular/core';
import { 
  HttpEvent, 
  HttpHandler, 
  HttpInterceptor, 
  HttpRequest, 
  HttpResponse,
  HttpErrorResponse } from '@angular/common/http';
import { Observable, of as observableOf, of } from 'rxjs';
import { finalize, tap } from "rxjs/operators";
import { Router } from "@angular/router";

import { HttpLoading } from './http.loading';
import { GlobalData } from './shared/models/global-data';
import { authStorageKey } from './modules/auth/auth-storage';

const loginStorageKey = authStorageKey;
@Injectable()
export class SiteInterceptor implements HttpInterceptor {
  
  constructor(private router: Router, private httpLoading: HttpLoading, protected globalData: GlobalData) {
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
        if (localStorage.getItem(loginStorageKey) != null) {
          let login = JSON.parse((localStorage.getItem(loginStorageKey)||"{}"));
          const clonedReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + (login.token || login.access_token))
          });
          const handler = next.handle(clonedReq).pipe(
              finalize(()=>
              {
                //console.log("finalize1:",req.url);
                setTimeout(() => {}, 100);
                this.httpLoading.onFinished(req);
              }),
              tap({ error: (err:any) =>  {
                if (err.status == 401){
                    localStorage.removeItem(loginStorageKey);
                    this.router.navigateByUrl('/auth/login');
                }
            }})
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
}