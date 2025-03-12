importScripts("https://www.gstatic.com/firebasejs/10.6.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.6.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "replace it",
  authDomain: "replace it",
  projectId: "replace it",
  storageBucket: "replace it",
  messagingSenderId: "replace it",
  appId: "replace it",
  measurementId: "replace it",
  vapidKey: "replace it",
});
const messaging = firebase.messaging();
