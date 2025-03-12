import {Component, OnInit} from '@angular/core';
import {getMessaging, getToken, onMessage} from "firebase/messaging";
import {environment} from '../../environment';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class NotificationServiceService implements OnInit {

  private messageSource = new BehaviorSubject<any>(null);
  public currentMessage = this.messageSource.asObservable();

  ngOnInit(): void {
    this.requestPermission();
    this.listenForMessages();
  }

  requestPermission() {
    const messaging = getMessaging();
    getToken(messaging, {vapidKey: environment.firebase.vapidKey}).then(token => {
      if (!token) {
        console.log('No registration token available. Request permission to generate one.');
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
  }

  listenForMessages() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      this.messageSource.next(payload);
    });
  }

}

