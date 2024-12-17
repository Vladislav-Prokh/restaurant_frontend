import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../services/MenuService/menu-service'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-meals-panel',
  imports: [CommonModule],
  templateUrl: './meals-panel.component.html',
  styleUrl: './meals-panel.component.css'
})

export class MealsPanelComponent implements OnInit {

  meals: any[] = [];

  constructor(private menuService: MenuService, private router: Router) {}

  ngOnInit(): void {
    this.menuService.getMeals().subscribe({
      next: (data) => {
        this.meals = data.content || [];
      },
      error: (err) => {
        console.error('Error fetching meals:', err);
      }
    });
  }

  isAdmin(): boolean {
    return this.router.url.includes('/admin');
  }

  removeMeal(meal: any): void {
    this.menuService.deleteMeal(meal);
  }
}
