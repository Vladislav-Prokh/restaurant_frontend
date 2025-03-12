import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/App/app.component';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('firebase-messaging-sw.js')
    .catch((err) => {
      console.log('Service Worker registration failed: ', err);
    });
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
