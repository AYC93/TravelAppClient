import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthConfig, OAuthService } from "angular-oauth2-oidc";
import { filter } from "rxjs";

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin + '/login',
  clientId: '795945122365-f88an7rsf6qb9q4dcplmdi4qvkp6aph5.apps.googleusercontent.com',
  scope: 'openid profile email',
  showDebugInformation: true
}


@Injectable()
export class GoogleApiService {

  router = inject(Router)

  constructor(private readonly oAuthSvc: OAuthService) {
    oAuthSvc.configure(oAuthConfig)
    
    oAuthSvc.loadDiscoveryDocument().then(() => {
      oAuthSvc.tryLoginImplicitFlow().then(() => {
        if (!oAuthSvc.hasValidAccessToken()) {
          oAuthSvc.initLoginFlow()
          
        }
        else {
          // Automatically load user profile
          this.oAuthSvc.events
            .pipe(filter((e) => e.type === 'token_received'))
            .subscribe((_) => this.oAuthSvc.loadUserProfile())
        }
      })
    })
  }

  get email(): string {
    const claims = this.oAuthSvc.getIdentityClaims()
    if (!claims) 
      return ''
    localStorage.setItem('email', claims['email'])
    return claims['email']
  }

  get idToken(): string {
    return this.oAuthSvc.getIdToken();
  }

  // ensure user is logged in
  isLoggedIn(): boolean {
    return this.oAuthSvc.hasValidAccessToken()
  }

  // used on authguard
  public login(targetUrl?: string) {
    this.oAuthSvc.initLoginFlow(targetUrl || this.router.url);
  }

  // logout button
  public logout() {
    this.oAuthSvc.revokeTokenAndLogout()
    this.oAuthSvc.logOut(true)
    localStorage.clear()
    this.router.navigate(['/'])
  }

}
