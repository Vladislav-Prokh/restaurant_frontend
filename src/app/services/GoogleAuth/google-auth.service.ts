import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { UserRoleService } from '../UserRoleService/user-role.service';
import { environment } from '../../environment';
@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {
  private loginUrl = '';
  private userInfoUrl = '';

  private isAuthenticated = new BehaviorSubject<boolean>(localStorage.getItem('isAuthenticated') === 'true');
  private userRole = new BehaviorSubject<string>(localStorage.getItem('userRole') || "");
  isAuthenticated$ = this.isAuthenticated.asObservable();
  userRole$ = this.userRole.asObservable();

  constructor(private http: HttpClient, private userRoleService: UserRoleService) {
      this.loginUrl = environment.apiUrl + "/oauth2/authorization/google";
      this.userInfoUrl = environment.apiUrl + "/api/auth/userinfo";
  }

  login() {
    window.location.href = this.loginUrl;
  }
  checkAuth() {
    this.http.get(this.userInfoUrl, { withCredentials: true }).subscribe({
      next: (user: any) => {
        this.isAuthenticated.next(true);
        this.userRole.next(user.role || "");

        localStorage.setItem('isAuthenticated', 'true'); 
        this.userRoleService.setUserRole(user.role || "");
        localStorage.setItem('user_id', user.id); 
      },
      error: () => {
        this.isAuthenticated.next(false);
        this.userRole.next("");
        localStorage.setItem('isAuthenticated', 'false'); 
        this.userRoleService.clearUserRole();
        localStorage.removeItem("user_id");
      }
    });
  }

  getUserInfo() {
    return this.http.get(this.userInfoUrl);
  }

  getUserRole() {
    return this.userRole$;
  }

  logout() {
    localStorage.removeItem('isAuthenticated'); 
    this.userRoleService.clearUserRole();
    localStorage.removeItem("user_id");
    this.isAuthenticated.next(false);
    this.userRole.next("");

    document.cookie.split(";").forEach(cookie => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() - 1);

      document.cookie = name + `=;expires=${expirationDate.toUTCString()};path=/`;
    });

    fetch('http://localhost:8080/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
    })
    .then(response => {
      if (!response.ok) {
        console.error("Logout failed", response.status);
      } 
    })
    .catch(error => {
      console.error("Error during logout request", error);
    });
  }
}
