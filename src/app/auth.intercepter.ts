import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GoogleAuthService } from './services/GoogleAuth/google-auth.service'; 

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let clonedRequest = req;
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'; 
    if (isAuthenticated) {
 
      clonedRequest = req.clone({
        withCredentials: true
      });
    }

    return next.handle(clonedRequest);
  }
}
