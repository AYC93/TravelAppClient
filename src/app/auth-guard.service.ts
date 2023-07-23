import { Injectable, inject } from "@angular/core";
import { GoogleApiService } from "./google-api.service";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AuthGuard{
    googleSvc=inject(GoogleApiService)

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean{
        if(this.googleSvc.isLoggedIn())
            return true;
        this.googleSvc.login(state.url)
        return false
        }
    }
    // private subjectAuthenticated$ = new BehaviorSubject<boolean>(false);
    // public isAuthenticated$ = this.subjectAuthenticated$.asObservable();
  
    // private subjectLoaded$ = new BehaviorSubject<boolean>(false);
    // public isLoaded$ = this.subjectLoaded$.asObservable();

    // canActivate(
    //     route: ActivatedRouteSnapshot,
    //     state: RouterStateSnapshot
    // ): Observable<boolean>{
    //     return this.isLoaded$.pipe(
    //         filter(isDone => isDone),
    //         switchMap( _ => this.isAuthenticated$),
    //         tap(isAuthenticated => isAuthenticated || this.googleSvc.login(state.url))
    //     )
    // }
// }