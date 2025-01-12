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
  currentPage: number = 0;
  pageSize: number = 10;
  totalPages: number = 0;
  constructor(private menuService: MenuService, private router: Router) {}
 
  ngOnInit(): void {
    this.loadDesserts();
  }

  loadDesserts(): void {
    this.menuService.getDesserts(this.currentPage, this.pageSize).subscribe({
      next: (data) => {
        this.desserts = data.content || [];
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

  removeDessert(dessert: any) {
    this.menuService.deleteDessert(dessert).subscribe({
      error: (err) => console.error('Error deleting dessert:', err),
    });
  }
  goToNextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadDesserts();
    }
  }

  goToPreviousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadDesserts();
    }
  }
}
