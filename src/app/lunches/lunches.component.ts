import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/MenuService/menu-service';
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-lunches',
  imports: [CommonModule],
  templateUrl: './lunches.component.html',
  styleUrls: ['./lunches.component.css']
})
export class LunchesComponent implements OnInit {

  lunches: any[] = [];

  constructor(private menuService: MenuService, private router: Router) {}

  ngOnInit(): void {
    this.menuService.getLunches().subscribe({
      next: (data) => {
        this.lunches = data.content || [];
      },
      error: (err) => {
        console.error('Error fetching menu items:', err);
      }
    });
  }

  isAdmin(): boolean {
    return this.router.url.includes('/admin');
  }

  removeLunch(lunch: any): void {
    this.menuService.deleteLunch(lunch);
  }
}
