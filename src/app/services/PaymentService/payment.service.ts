import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  public createBuyLunchCheckoutSession(quantity:number) {
    this.http.post('http://localhost:8081/stripe/lunch/checkout-session', {
      quantity:quantity
    }, {responseType: 'text'})
      .subscribe({
        next: (response) => {
          window.location.href = response;
        },
        error: (error) => console.log(error)
      });
  }
  public createSubscribeLunchCheckoutSession() {
    this.http.post('http://localhost:8081/stripe/lunches/subscription/checkout-session', {},{responseType: 'text'})
      .subscribe({
        next: (response) => {
          window.location.href = response;
        },
        error: (error) => console.log(error)});
  }
}
