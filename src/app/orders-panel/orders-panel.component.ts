import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MenuService } from '../services/MenuService/menu-service';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environment';
@Component({
  selector: 'app-orders-panel',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './orders-panel.component.html',
  styleUrls: ['./orders-panel.component.css']
})


export class OrdersPanelComponent implements OnInit {
  orderForm: FormGroup;
  lunches: any[] = [];
  beverages: any[] = [];
  availableAdditionals: any[] = [];
  cuisineTypes: string[] = []; 

  constructor(private fb: FormBuilder, private orderService: MenuService) {
    this.cuisineTypes = environment.cuisines;

    this.orderForm = this.fb.group({
      lunchId: [null],
      beverageId: [null],
      mainCourseCuisine: [null], 
      dessertCuisine: [null], 
      orderedAdditions: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.orderService.getLunches().subscribe((data) => {
      this.lunches = data.content;
    });

    this.orderService.getBeverages().subscribe((data) => {
      this.beverages = data.content;
    });

    this.orderService.getAdditionals().subscribe((data) => {
      this.availableAdditionals = data.content;
      this.initializeAdditions();
    });
  }

  get orderedAdditions(): FormArray {
    return this.orderForm.get('orderedAdditions') as FormArray;
  }

  initializeAdditions(): void {
    const additionsFormArray = this.fb.array(
      this.availableAdditionals.map((additional) =>
        this.fb.group({
          additionId: [additional.beverage_additional_id],
          beverageId: [this.orderForm.value.beverage_id || null],
          quantity: [0, [Validators.min(0)]],
          selected: [false],
        })
      )
    );
    this.orderForm.setControl('orderedAdditions', additionsFormArray);
  }

  getOrderedAdditions(): any[] {
    const additions = this.orderForm.value.orderedAdditions;
    return additions
      .filter((addition: any) => addition.selected && addition.quantity > 0)
      .map((addition: any) => ({
        additionId: addition.additionId,
        beverageId: this.orderForm.value.beverageId || null,
        quantity: addition.quantity,
      }));
  }

  onSubmit(): void {
    if (this.orderForm.valid) {
      const orderedAdditions = this.getOrderedAdditions();
      const orderData = {
        lunchId: this.orderForm.value.lunchId || null,
        beverageId: this.orderForm.value.beverageId || null,
        mainCourseCuisine: this.orderForm.value.mainCourseCuisine || null,
        dessertCuisine: this.orderForm.value.dessertCuisine || null,
        waiterId: localStorage.getItem('user_id'),
        orderedAdditions: orderedAdditions,
      };

      this.orderService.addOrder(orderData).subscribe(
        (response) => {
          console.log('The order has added:', response);
          location.reload();
        },
        (error) => {
          console.error('There is an error with adding order:', error);
        }
      );
    }
  }
}

