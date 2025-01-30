import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/AuthService/auth.service';


@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const roles = next.data['roles'] || [];
      const userRole = this.authService.getRole();

      if (userRole==='') {
        this.router.navigate(['/menu/lunches']);
        return false;
      }

      if (roles.includes(userRole)) {
        return true;
      } else {
        this.router.navigate(['/menu/lunches']);
        return false;
      }
  }
}
