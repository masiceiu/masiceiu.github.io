import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Add an authorization header (example)
    const modifiedRequest = request.clone({
      setHeaders: {
        Authorization: 'Bearer my-auth-token'
      }
    });
    return next.handle(modifiedRequest);
  }
}