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
  currentPage: number = 0;
  pageSize: number = 6;
  totalPages: number = 0;

  constructor(private menuService: MenuService, private router: Router) {}

  ngOnInit(): void {
    this.loadBeverages();
  }

  loadBeverages(): void {
    this.menuService.getBeverages(this.currentPage, this.pageSize).subscribe({
      next: (data) => {
        this.beverages = data.content || [];
        this.totalPages = Math.ceil(data.page.totalElements / this.pageSize);
      },
      error: (err) => {
        console.error('Error fetching meals:', err);
      },
    });
  }
  removeBeverage(beverage: any) {
    this.menuService.deleteBeverage(beverage).subscribe({
      error: (err) => console.error('Error deleting beverage:', err),
    }
    );
  }

    isAdmin(): any {
   return this.router.url.includes('/admin');
    }

    goToNextPage(): void {
      if (this.currentPage < this.totalPages - 1) {
        this.currentPage++;
        this.loadBeverages();
      }
    }

    goToPreviousPage(): void {
      if (this.currentPage > 0) {
        this.currentPage--;
        this.loadBeverages();
      }
    }

}
