
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuService } from '../../services/MenuService/menu-service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '../../environment';
@Component({
  selector: 'app-meals-add-form',
  templateUrl: './meals-add-form.component.html',
  styleUrls: ['./meals-add-form.component.css'],
  imports:[CommonModule,ReactiveFormsModule]
})


export class MealsAddFormComponent implements OnInit {
  mealForm: FormGroup;
  cuisines: string[] = [];
  constructor(
    private fb: FormBuilder,
    private menuService: MenuService
  ) {
    this.cuisines = environment.cuisines;
    this.mealForm = this.fb.group({
      mealName: ['', Validators.required],
      description: ['', Validators.required],
      mealPrice: [null, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.mealForm.valid) {
      const mealData = this.mealForm.value;
      this.menuService.addMeal(mealData).subscribe(
        (response) => {
          console.log('Successfully added:', response);
          this.mealForm.reset();
        },
        (error) => {
          console.error('Error during saving dish:', error);
        }
      );
    }
  }
}
