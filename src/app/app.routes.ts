import { Routes } from '@angular/router';
import { LunchesComponent } from './lunches/lunches.component';
import { MainTemplateComponent } from './main-template/main-template.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { LunchFromComponent } from './control-forms/lunches-add-form/lunch-form.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { RoleGuard } from './auth/role.guard';
import { MealsPanelComponent } from './meals-panel/meals-panel.component';
import { DessertsPanelComponent } from './desserts-panel/desserts-panel.component';
import { OrdersPanelComponent } from './orders-panel/orders-panel.component';
import { MealsAddFormComponent } from './control-forms/meals-add-form/meals-add-form.component';
import { DessertsAddFormComponent } from './control-forms/desserts-add-form/desserts-add-form.component';
import { EmployeePanelComponent } from './control-forms/employee-panel/employee-panel.component';
import { BeveragesAddFormComponent } from './control-forms/beverages-add-form/beverages-add-form.component';

export const routes: Routes = [
  { 
    path: 'menu', 
    component: MainTemplateComponent, 
    children: [
      { path: '', redirectTo: 'lunches', pathMatch: 'full' },
      { path: 'lunches', component: LunchesComponent },
      { path: 'beverages', component: BeveragesComponent },
    ]
  },
  {
    path:'orders',
    component:MainTemplateComponent,
    children:[
      {
        path: '',
        component: OrdersPanelComponent,
        canActivate: [RoleGuard],
        data: { roles: ['WAITER'] }
      }
    ]
  },
  {
    path: 'admin',
    component: MainTemplateComponent,
    children: [
      { path: '', component: AdminPanelComponent },
      { path: 'beverages', component: BeveragesComponent },
      { path: 'lunches', component: LunchesComponent },
      { path: 'meals', component:  MealsPanelComponent},
      { path: 'desserts', component:  DessertsPanelComponent},
      { path: 'lunch-from', component: LunchFromComponent },
      { path: 'meal-from', component: MealsAddFormComponent },
      { path: 'dessert-form', component: DessertsAddFormComponent },
      { path: 'beverage-form', component: BeveragesAddFormComponent },
      { path: 'orders', component: OrdersPanelComponent },
      {path:'employees', component: EmployeePanelComponent}
    ],
    canActivate: [RoleGuard], 
    data: { roles: ['ADMIN'] }
  },
  { path: '**', redirectTo: '/menu' }  
];

