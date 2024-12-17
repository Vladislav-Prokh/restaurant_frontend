import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { GoogleAuthService } from '../services/GoogleAuth/google-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: GoogleAuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const roles = next.data['roles'] || [];
      const userRole = localStorage.getItem('userRole');

      if (!userRole) {
        this.router.navigate(['/login']);
        return false;
      }

      if (roles.includes(userRole)) {
        console.log('Access granted');
        return true;
      } else {
        this.router.navigate(['/unauthorized']);
        return false;
      }
  }
}
