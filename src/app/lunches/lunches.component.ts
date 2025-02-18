import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/MenuService/menu-service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-lunches',
  imports: [CommonModule, FormsModule],
  templateUrl: './lunches.component.html',
  styleUrls: ['./lunches.component.css']
})

export class LunchesComponent implements OnInit {

  lunches: any[] = [];
  currentPage: number = 0;
  pageSize: number = 9;
  totalPages: number = 0;
  searchQuery: String = '';

  constructor(private menuService: MenuService, private router: Router) {}

  ngOnInit(): void {
     this.loadLunches();
  }

  loadLunches(): void {
    this.menuService.getLunches(this.currentPage, this.pageSize).subscribe({
      next: (data) => {
        this.lunches = data.content || [];
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

  searchLunch() {
    if(this.searchQuery !== '') {
     this.menuService.findLunchesByQuery(this.searchQuery).subscribe({
       next: (data) => {
         this.lunches = data||[]
       }
     });
    }
  }

  removeLunch(lunch: any): void {
    this.menuService.deleteLunch(lunch);
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadLunches();
    }
  }

  goToPreviousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadLunches();
    }
  }

}
