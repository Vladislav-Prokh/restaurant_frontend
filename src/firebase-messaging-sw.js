importScripts("https://www.gstatic.com/firebasejs/10.6.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.6.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyB3VZP62yoyK2gYLx5eFddQzUQUZCuATCY",
  authDomain: "restaurant-4e9e0.firebaseapp.com",
  projectId: "restaurant-4e9e0",
  storageBucket: "restaurant-4e9e0.firebasestorage.app",
  messagingSenderId: "551720016150",
  appId: "1:551720016150:web:719d45cbd4e13497b31837",
  measurementId: "G-0EC015STQW",
  vapidKey: "BI3jqUl2dck4RXekI351Baf7tviGQk3nJLVmU-aGFYmPFVrt8NsNXBxPpbwzKjxyWk_I2i1lz5ZK8JULgoeNXYQ"
});
const messaging = firebase.messaging();
