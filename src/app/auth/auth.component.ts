import { Component} from '@angular/core';
import { inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  providers: [MODULES]
})

export class AuthComponent  {
 private authService = inject(GoogleAuthService);
  signInWithGoogle() {
    this.authService.login();
  }
}