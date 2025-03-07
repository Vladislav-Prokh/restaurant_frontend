import { Injectable } from '@angular/core';
import { getMessaging, getToken, onMessage } from '@firebase/messaging';
import { environment } from '../../environment';
import { getAnalytics } from '@angular/fire/analytics';
import { initializeApp } from '@angular/fire/app';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {

 // messaging;

  constructor() {
    //const app = initializeApp(environment.firebaseConfig);
    //const analytics = getAnalytics(app);
    //this.messaging = getMessaging(app);
  }





}
