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

  constructor(
    private fb: FormBuilder, 
    private lunchService: MenuService
  ) {


    this.lunchForm = this.fb.group({
      mainCourseId: [null, Validators.required],
      dessertId: [null, Validators.required]
    });

    this.lunchService.getMeals().subscribe((data) => {
      this.meals = data.content;
    });

    this.lunchService.getDesserts().subscribe((data) => {
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
      response => {
        console.log('Ланч успешно добавлен:', response);
      },
      error => {
        console.error('Ошибка при добавлении ланча:', error);
      }
    );
  }
}
}
