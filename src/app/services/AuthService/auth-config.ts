import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  requireHttps: false,
  disablePKCE: false,
  issuer: "http://localhost:9000",
  redirectUri: "http://localhost:4200/menu/beverages",
  clientId: 'oidc-client',
  responseType: 'code',
  scope: 'openid profile offline_access',
  showDebugInformation: true,
  strictDiscoveryDocumentValidation: false,
  tokenEndpoint:'http://localhost:9000/oauth2/token',
  userinfoEndpoint:'http://localhost:9000/userinfo',
  useHttpBasicAuth: false,
};

