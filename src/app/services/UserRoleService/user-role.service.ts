import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  private userRoleSubject = new BehaviorSubject<string | null>(localStorage.getItem('userRole'));
  userRole$ = this.userRoleSubject.asObservable();

  constructor() {}

  setUserRole(role: string): void {
    localStorage.setItem('userRole', role);
    this.userRoleSubject.next(role); 
  }

  getUserRole(): string | null {
    return this.userRoleSubject.value;
  }

  clearUserRole(){
    localStorage.removeItem('userRole');
    this.userRoleSubject.next(null); 
  }
}
