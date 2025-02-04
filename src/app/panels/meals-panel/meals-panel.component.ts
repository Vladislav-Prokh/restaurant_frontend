import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../services/MenuService/menu-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meals-panel',
  imports: [CommonModule],
  templateUrl: './meals-panel.component.html',
  styleUrl: './meals-panel.component.css'
})

export class MealsPanelComponent implements OnInit {
  meals: any[] = [];
  currentPage: number = 0;
  pageSize: number = 12;
  totalPages: number = 0;

  constructor(private menuService: MenuService, private router: Router) {}

  ngOnInit(): void {
    this.loadMeals();
  }

  loadMeals(): void {
    this.menuService.getMeals(this.currentPage, this.pageSize).subscribe({
      next: (data) => {
        this.meals = data.content || [];
        this.totalPages = Math.ceil(data.page.totalElements / this.pageSize);
      },
      error: (err) => {
        console.error('Error fetching meals:', err);
      },
    });
  }

  isAdmin(): boolean {
    return this.router.url.includes('/admin');
  }

  removeMeal(meal: any): void {
    this.menuService.deleteMeal(meal).subscribe({
      next: () => {
        console.log('Meal removed successfully');
        this.loadMeals();
      },
      error: (err) => console.error('Error deleting meal:', err),
    });
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadMeals();
    }
  }

  goToPreviousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadMeals();
    }
  }
}
