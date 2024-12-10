import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',

  clientId: '831065904177-pfo1o5skuamubqvgr8ft7s3gua7je0fk.apps.googleusercontent.com',
  redirectUri: "http://localhost:8080"+'/login/oauth2/code/google',
  scope: 'openid profile email',
};

