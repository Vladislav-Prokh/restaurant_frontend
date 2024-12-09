import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuService } from '../services/MenuService/menu-service'
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-lunch-from',
  templateUrl: './lunch-from.component.html',
  styleUrls: ['./lunch-from.component.css'],
  imports:[ReactiveFormsModule,CommonModule]
})
export class LunchFromComponent{
  lunchForm: FormGroup;  
  meals: any[] = [];  
  desserts: any[] = [];

  constructor(
    private fb: FormBuilder, 
    private lunchService: MenuService
  ) {
    this.lunchForm = this.fb.group({
      meal: [null, [Validators.required]],
      dessert: [null, [Validators.required]],
      price: [null, [Validators.required, Validators.min(0)]],
    });

    this.lunchService.getMeals().subscribe((data) => {
      this.meals = data;
    });

    this.lunchService.getDesserts().subscribe((data) => {
      this.desserts = data;
    });
  }


  onSubmit(): void {
    if (this.lunchForm.valid) {
      const lunchData = this.lunchForm.value;
      this.lunchService.addLunch(lunchData).subscribe(
        response => {
          console.log('Ланч успешно добавлен:', response);
          // Действия после успешного добавления (например, очистка формы)
        },
        error => {
          console.error('Ошибка при добавлении ланча:', error);
        }
      );
    }
  }
}
