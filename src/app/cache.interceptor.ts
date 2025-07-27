import { Injectable, Injector } from '@angular/core';
import { 
  HttpEvent, 
  HttpHandler, 
  HttpInterceptor, 
  HttpRequest, 
  HttpResponse } from '@angular/common/http';
import { Observable, share } from "rxjs";
import { GlobalData } from './shared/models/global-data';



@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor(protected globalData: GlobalData) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.method !== "GET") {
      console.log(
        "http CACHE interceptor - bypassing cache for url:",
        req.urlWithParams
      );
      return next.handle(req);
    }

    const key = req.urlWithParams;
    return next.handle(req).pipe(share({
      resetOnError: false,
      resetOnComplete: false,
      resetOnRefCountZero: false
    }));
    /*
    if (this.globalData.cache[key]) {
      console.log("http CACHE interceptor - returning cached data");
      return this.globalData.cache[key];
    } else {
      console.log("http CACHE interceptor - fetch and store data");
      const storedRxjsReplaySubjectCache = next.handle(req).pipe(share({
        resetOnError: false,
        resetOnComplete: false,
        resetOnRefCountZero: false
      }));
      this.globalData.cache[key] = storedRxjsReplaySubjectCache;
      return storedRxjsReplaySubjectCache;
    }*/

  }
}