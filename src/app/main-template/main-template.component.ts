import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {AuthService} from '../services/AuthService/auth.service';
import {AuthComponent} from '../auth/auth.component';
import {NotificationServiceService} from '../services/NotificationService/notification-service.service';
import { initializeApp } from "firebase/app";
import {environment} from '../environment';
initializeApp(environment.firebase);

@Component({
  selector: 'app-main-template',
  standalone: true,
  imports: [RouterModule, AuthComponent, CommonModule],
  providers:[NotificationServiceService],
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.css'],
})

export class MainTemplateComponent {

  isAdmin: boolean = false;
  isWaiter: boolean = false;

  notificationMessage: any = null;


  constructor(private authService: AuthService, private notificationService: NotificationServiceService){
    this.isAdmin = this.authService.getRole() === 'ADMIN';
    this.isWaiter = this.authService.getRole() === 'WAITER';

    this.notificationService.requestPermission();
    this.notificationService.listenForMessages();
    this.notificationService.currentMessage.subscribe(message => {
      if (message) {
        this.notificationMessage = message;
        setTimeout(() => {
          this.notificationMessage = null;
        }, 5000);
      }
    })
  }
}
