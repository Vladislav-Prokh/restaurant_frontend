import { Routes } from '@angular/router';
import { LunchesComponent } from './lunches/lunches.component';
import { MainTemplateComponent } from './main-template/main-template.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { LunchFromComponent } from './control-forms/lunches-add-form/lunch-form.component';
import { AdminPanelComponent } from './panels/admin-panel/admin-panel.component';
import { RoleGuard } from './auth/role.guard';
import { MealsPanelComponent } from './panels/meals-panel/meals-panel.component';
import { DessertsPanelComponent } from './panels/desserts-panel/desserts-panel.component';
import { OrdersPanelComponent } from './panels/orders-panel/orders-panel.component';
import { MealsAddFormComponent } from './control-forms/meals-add-form/meals-add-form.component';
import { DessertsAddFormComponent } from './control-forms/desserts-add-form/desserts-add-form.component';
import { EmployeePanelComponent } from './panels/employee-panel/employee-panel.component';
import { BeveragesAddFormComponent } from './control-forms/beverages-add-form/beverages-add-form.component';
import {ParserPanelComponent} from './panels/parser-panel/parser-panel.component';
import {ReportGeneratorPanelComponent} from './panels/report-generator-panel/report-generator-panel.component';
import {OrdersComponent} from './orders/orders.component';
import {SpecificLunchComponent} from './specific-lunch/specific-lunch.component';

export const routes: Routes = [
  {
    path: 'menu',
    component: MainTemplateComponent,
    children: [
      { path: '', redirectTo: 'lunches', pathMatch: 'full' },
      { path: 'lunches', component: LunchesComponent },
      { path: 'lunches/:id', component: SpecificLunchComponent },
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
      { path: 'parser', component:  ParserPanelComponent},
      { path: 'meals', component:  MealsPanelComponent},
      { path: 'reports', component:  ReportGeneratorPanelComponent},
      { path: 'desserts', component:  DessertsPanelComponent},
      { path: 'lunch-form', component: LunchFromComponent },
      { path: 'meal-form', component: MealsAddFormComponent },
      { path: 'dessert-form', component: DessertsAddFormComponent },
      { path: 'beverage-form', component: BeveragesAddFormComponent },
      { path: 'orders', component: OrdersComponent },
      { path:'employees', component: EmployeePanelComponent}
    ],
    canActivate: [RoleGuard],
    data: { roles: ['ADMIN'] }
  },
  { path: '**', redirectTo: '/menu' }
];

