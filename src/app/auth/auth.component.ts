import { Component, OnInit} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {AuthService} from '../services/AuthService/auth.service';

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
  providers: [MODULES,AuthService]
})

export class AuthComponent implements OnInit {

 constructor(private oauthService: AuthService) {}

  signIn() {
    this.oauthService.signIn();
  }
  logout(): void {
    this.oauthService.logout();
  }
  ngOnInit() {
    this.oauthService.init();
    this.isAuthenticated();
  }
  isAuthenticated() {
   return this.oauthService.isAuthenticated();
  }

}
