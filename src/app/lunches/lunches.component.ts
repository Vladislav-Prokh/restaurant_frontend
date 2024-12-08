import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/MenuService/menu-service';
import { CommonModule } from '@angular/common'; 
@Component({
    selector: 'app-lunches',
    imports: [CommonModule],
    templateUrl: './lunches.component.html',
    styleUrl: './lunches.component.css'
})
export class LunchesComponent implements OnInit {

  lunches: any[] = [];

  constructor(private menuService: MenuService) {}
  ngOnInit(): void {
    this.menuService.getLunches().subscribe({

      next: (data) => {
        this.lunches = data.content||[];
      },
      error: (err) => {
        console.error('Error fetching menu items:', err);
      }
    });
  }
}


