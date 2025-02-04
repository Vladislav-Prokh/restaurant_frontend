import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuService } from '../../services/MenuService/menu-service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-lunch-from',
  templateUrl: './lunch-form.component.html',
  styleUrls: ['./lunch-form.component.css'],
  imports:[ReactiveFormsModule,CommonModule]
})
export class LunchFromComponent{
  lunchForm: FormGroup;
  meals: any[] = [];
  desserts: any[] = [];

  mealPage: number = 0;
  mealPageSize: number = 10;
  dessertPage: number = 0;
  dessertPageSize: number = 10;

  constructor(
    private fb: FormBuilder,
    private lunchService: MenuService
  ) {

    this.lunchForm = this.fb.group({
      mainCourseId: [null, Validators.required],
      dessertId: [null, Validators.required]
    });

    this.lunchService.getMeals(0,this.mealPageSize).subscribe((data) => {
      this.meals = data.content;
    });

    this.lunchService.getDesserts(0,this.dessertPageSize).subscribe((data) => {
      this.desserts = data.content;
    });
  }


 onSubmit(): void {
  if (this.lunchForm.valid) {
    const lunchData = {
      mainCourseId: this.lunchForm.value.mainCourseId,
      dessertId: this.lunchForm.value.dessertId
    };
    this.lunchService.addLunch(lunchData).subscribe(
      response =>{
        window.location.reload();
      }
    );
  }
}

  updatePage(type: 'meal' | 'dessert', direction: 'next' | 'prev'): void {
    if (type === 'meal') {
      this.mealPage += direction === 'next' ? 1 : -1;
      this.lunchService.getMeals(this.mealPage).subscribe((data) => {
        this.meals = data.content;
      });
    } else {
      this.dessertPage += direction === 'next' ? 1 : -1;
      this.lunchService.getDesserts(this.dessertPage).subscribe((data) => {
        this.desserts = data.content;
      });
    }
  }
  mealNextPage(): void {
    this.updatePage('meal', 'next');
  }

  mealPrevPage(): void {
    this.updatePage('meal', 'prev');
  }

  dessertNextPage(): void {
    this.updatePage('dessert', 'next');
  }

  dessertPrevPage(): void {
    this.updatePage('dessert', 'prev');
  }


}
