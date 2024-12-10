import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {
  private loginUrl = 'http://localhost:8080/oauth2/authorization/google';
  private userInfoUrl = 'http://localhost:8080/api/auth/userinfo';

  private isAuthenticated = new BehaviorSubject<boolean>(false);
  private userRole = new BehaviorSubject<string>("");

  isAuthenticated$ = this.isAuthenticated.asObservable();
  userRole$ = this.userRole.asObservable();


  constructor(private http: HttpClient, private router: Router) {}

  login() {
    window.location.href = this.loginUrl; 
  }

  checkAuth() {
    this.http.get(this.userInfoUrl, { withCredentials: true }).subscribe({
      next: (user: any) => {
        this.isAuthenticated.next(true);
        this.userRole.next(user.role || "");
      },
      error: () => {
        this.isAuthenticated.next(false);
        this.userRole.next("");
      }
    });
  }
  
  getUserInfo() {
    return this.http.get(this.userInfoUrl);
  }
  getUserRole(){
    return this.userRole$;
  }
  logout() {
    localStorage.removeItem('access_token');
    this.isAuthenticated.next(false);
    this.userRole.next("");
  }
}




