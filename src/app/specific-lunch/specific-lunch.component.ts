import { Component } from '@angular/core';
import {MenuService} from '../services/MenuService/menu-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specific-lunch',
  imports: [],
  templateUrl: './specific-lunch.component.html',
  styleUrl: './specific-lunch.component.css'
})
export class SpecificLunchComponent {

  lunch:any;

  constructor( private menuService: MenuService,private route: ActivatedRoute) {
   let lunchId = Number(this.route.snapshot.paramMap.get('id'));
   this.lunch = menuService.getLunchById(lunchId).subscribe(lunch => {
     this.lunch = lunch;
     console.log(lunch);
   });

  }
}
