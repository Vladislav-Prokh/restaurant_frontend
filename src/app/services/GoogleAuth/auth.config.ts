import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  clientId: '1045842654208-dcsa920tjltdo9maediv8mqdi19ceaj0.apps.googleusercontent.com',
  redirectUri: window.location.origin+'/login/oauth2/code/google',
  scope: 'openid profile email',
};
