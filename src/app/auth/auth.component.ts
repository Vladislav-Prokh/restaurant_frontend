import { Component, OnInit} from '@angular/core';
import { inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import {GoogleAuthService } from '../services/GoogleAuth/google-auth.service';

const MODULES: any[] = [
  FormsModule,
  ReactiveFormsModule,

];


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  standalone: true,
  imports:[ CommonModule],
  providers: [MODULES]
})

export class AuthComponent implements OnInit {
  
 private authService = inject(GoogleAuthService);

  isAuthenticated = this.authService.isAuthenticated$;
  role = this.authService.userRole$;

  signInWithGoogle() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }
  ngOnInit() {
    this.authService.checkAuth();
  }

}