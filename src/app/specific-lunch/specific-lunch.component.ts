import { Component } from '@angular/core';
import {MenuService} from '../services/MenuService/menu-service';
import { ActivatedRoute } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-specific-lunch',
  imports: [
    FormsModule
  ],
  templateUrl: './specific-lunch.component.html',
  styleUrl: './specific-lunch.component.css'
})
export class SpecificLunchComponent {

  lunch:any;
  lunchQuantity:number = 1;

  constructor( private menuService: MenuService,private route: ActivatedRoute, private http: HttpClient) {
   let lunchId = Number(this.route.snapshot.paramMap.get('id'));
   this.lunch = menuService.getLunchById(lunchId).subscribe(lunch => {
     this.lunch = lunch;
   });

  }
  buyLunch(quantity:number) {
    this.http.post('http://localhost:8081/stripe/checkout-session', {
        quantity:quantity
    }, {responseType: 'text'})
      .subscribe({
        next: (response) => {
          window.location.href = response;
        },
        error: (error) => console.log(error)
      });
  }
}
