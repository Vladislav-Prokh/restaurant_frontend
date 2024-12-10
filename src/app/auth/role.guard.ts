import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { GoogleAuthService } from '../services/GoogleAuth/google-auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService: GoogleAuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const requiredRoles: string[] = route.data['roles'] || [];

    return this.authService.getUserRole().pipe(
      map((userRole: string) => {
        if (requiredRoles.includes(userRole)) {
          return true; 
        }
        this.router.navigate(['/unauthorized']); 
        return false;
      }),
      catchError(() => {
        this.router.navigate(['/unauthorized']); 
        return of(false); 
      })
    );
  }
}
