importScripts("https://www.gstatic.com/firebasejs/10.6.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.6.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "replace_it",
  authDomain: "replace_it",
  projectId: "replace_it",
  storageBucket: "replace_it",
  messagingSenderId: "replace_it",
  appId: "replace_it",
  measurementId: "replace_it",
  vapidKey: "replace_it"
});
const messaging = firebase.messaging();
