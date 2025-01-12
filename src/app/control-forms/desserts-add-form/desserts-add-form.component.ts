
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuService } from '../../services/MenuService/menu-service';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../environment';
@Component({
  selector: 'app-desserts-add-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './desserts-add-form.component.html',
  styleUrl: './desserts-add-form.component.css'
})
export class DessertsAddFormComponent {
  dessertForm: FormGroup; 
  cuisines: string[] = [];
  constructor(
    private fb: FormBuilder, 
    private dessertService: MenuService
  ) {

    this.cuisines = environment.cuisines;
    
    this.dessertForm = this.fb.group({
      dessertName: ['', Validators.required],
      dessertPrice: [null, [Validators.required, Validators.min(0)]],
      cuisine: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.dessertForm.valid) {

      const dessertData = {
        dessertName: this.dessertForm.value.dessertName,
        dessertPrice: this.dessertForm.value.dessertPrice,
        cuisine: this.dessertForm.value.cuisine,
        
      };

      this.dessertService.addDessert(dessertData).subscribe(
        response => {
          console.log('Десерт успешно добавлен:', response);
        },
        error => {
          console.error('Ошибка при добавлении десерта:', error);
        }
      );
    }
  }
}
