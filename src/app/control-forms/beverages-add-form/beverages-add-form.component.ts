import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MenuService } from '../../services/MenuService/menu-service';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-beverages-add-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './beverages-add-form.component.html',
  styleUrl: './beverages-add-form.component.css'
})


export class BeveragesAddFormComponent {
  beverageForm: FormGroup; 
  additionalForm: FormGroup; 

  constructor(
    private fb: FormBuilder,
    private menuService: MenuService,

  ) {

    this.beverageForm = this.fb.group({
      beverageName: ['', Validators.required],
      beveragePrice: [null, [Validators.required, Validators.min(0)]]
    });

    this.additionalForm = this.fb.group({
      beverageAdditionalName: ['', Validators.required],
      beverageAdditionalPrice: [null, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmitBeverage(): void {
    if (this.beverageForm.valid) {
      const beverageData = {
        beverageName: this.beverageForm.value.beverageName,
        beveragePrice: this.beverageForm.value.beveragePrice
      };

      this.menuService.addBeverage(beverageData).subscribe(
        response => {
          console.log('Beverage successfully added:', response);
          this.beverageForm.reset(); 
        },
        error => {
          console.error('Error adding beverage:', error);
        }
      );
    }
  }

  onSubmitAdditional(): void {
    if (this.additionalForm.valid) {
      const additionalData = {
        beverageAdditionalName: this.additionalForm.value.beverageAdditionalName,
        beverageAdditionalPrice: this.additionalForm.value.beverageAdditionalPrice
      };

      this.menuService.addAdditional(additionalData).subscribe(
        response => {
          console.log('Additional successfully added:', response);
          this.additionalForm.reset();
        },
        error => {
          console.error('Error adding additional:', error);
        }
      );
    }
  }
}
