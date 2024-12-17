import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/MenuService/menu-service';
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';
@Component({
    selector: 'app-beverages',
    imports: [CommonModule],
    templateUrl: './beverages.component.html',
    styleUrls: ['./beverages.component.css']
})

export class BeveragesComponent implements OnInit {

  beverages: any[] = [];

  constructor(private menuService: MenuService, private router: Router) {}
  
  ngOnInit(): void {
    this.menuService.getBeverages().subscribe({
      next: (data) => {
        this.beverages = data.content||[];
      },
      error: (err) => {
        console.error('Error fetching menu items:', err);
      }
    });
  }

  removeBeverage(beverage: any) {
    this.menuService.deleteBeverage(beverage);
  }

    isAdmin(): any {
   return this.router.url.includes('/admin');
    }

}