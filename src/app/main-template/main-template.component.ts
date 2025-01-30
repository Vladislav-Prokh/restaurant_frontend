import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {AuthService} from '../services/AuthService/auth.service';
import {AuthComponent} from '../auth/auth.component';

@Component({
  selector: 'app-main-template',
  imports: [RouterModule,AuthComponent,CommonModule],
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.css']
})

export class MainTemplateComponent {
  isAdmin: boolean = false;
  isWaiter: boolean = false;

  constructor(private authService: AuthService) {
    this.isAdmin = this.authService.getRole() === 'ADMIN';
    this.isWaiter = this.authService.getRole() === 'WAITER';
  }

}
