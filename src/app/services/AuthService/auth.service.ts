import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { jwtDecode } from 'jwt-decode';
import { authCodeFlowConfig } from './auth-config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userRole: string = '';

  constructor(private oauthService: OAuthService) {}

  signIn() {
    this.oauthService.initCodeFlow();
  }

  logout(): void {
    this.oauthService.logOut();
    localStorage.removeItem('role');
  }

  init() {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (this.oauthService.hasValidAccessToken()) {
        const token = this.oauthService.getAccessToken();
        const decodedToken: any = jwtDecode(token);
        this.userRole = decodedToken.roles || '';
        localStorage.setItem('role',this.userRole);
        localStorage.setItem('user_email', decodedToken.email);
      }
    }).catch((error) => {
      console.error('Error during login or discovery document load', error);
    });
  }

  getRole(): string {
    return localStorage.getItem('role')||"";
  }

  isAuthenticated(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

}
