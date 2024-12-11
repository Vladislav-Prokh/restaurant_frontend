import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /*const token = localStorage.getItem('access_token');
    
    let clonedRequest = req;
    
    if (token) {
      clonedRequest = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      });
    } else {
      clonedRequest = req.clone({
      });
    }
    
    return next.handle(clonedRequest);*/
    return next.handle(req);
  }
}