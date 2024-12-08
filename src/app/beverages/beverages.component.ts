import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/MenuService/menu-service';
import { CommonModule } from '@angular/common'; 

@Component({
    selector: 'app-beverages',
    imports: [CommonModule],
    templateUrl: './beverages.component.html',
    styleUrls: ['./beverages.component.css']
})

export class BeveragesComponent implements OnInit {
  beverages: any[] = [];

  constructor(private menuService: MenuService) {}
  
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
}