import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../services/MenuService/menu-service'; 
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-desserts-panel',
  templateUrl: './desserts-panel.component.html',
  styleUrls: ['./desserts-panel.component.css'],
  imports:[CommonModule],
})
export class DessertsPanelComponent implements OnInit {

  desserts: any[] = []; 

  constructor(private menuService: MenuService, private router: Router) {}

  ngOnInit(): void {
    this.menuService.getDesserts().subscribe({
      next: (data) => {
        this.desserts = data.content || [];
      },
      error: (err) => {
        console.error('Error fetching desserts:', err);
      }
    });
  }

  isAdmin(): boolean {
    return this.router.url.includes('/admin');
  }

  removeDessert(dessert: any): void {
    this.menuService.deleteDessert(dessert);
  }
}
