export const environment = {
  production: false,
  apiUrl: 'http://localhost:8081',
  authServer: 'http://localhost:8081',
  cuisines: ["Mexican", "Polish", "Italian"],
  item_types: ["MEAL","DESSERT","BEVERAGE"],
  roles: ["ADMIN","WAITER","DEFAULT"],
  report_types: ["pdf","xls"],
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "",
    vapidKey: ""
  }
};
