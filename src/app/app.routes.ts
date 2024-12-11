import { Routes } from '@angular/router';
import { LunchesComponent } from './lunches/lunches.component';
import { MainTemplateComponent } from './main-template/main-template.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { LunchFromComponent } from './lunch-from/lunch-from.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { OrderComponent } from './order/order.component';
import { RoleGuard } from './auth/role.guard';

export const routes: Routes = [
  { 
    path: 'menu', 
    component: MainTemplateComponent, 
    children: [
      { path: '', redirectTo: 'lunches', pathMatch: 'full' },
      { 
        path: 'lunches', 
        component: LunchesComponent,
      },
      { 
        path: 'beverages', 
        component: BeveragesComponent,
      },
    ]
  },
  {
    path:'orders',
    component:MainTemplateComponent,
    children:[
    {
      canActivate: [RoleGuard],
      data: { roles: ['WAITER'] },
      path: 'order',
      component:OrderComponent
    }
    ]
  },
  {
    path: 'admin',
    component: MainTemplateComponent,
    canActivate: [RoleGuard],
    data: { roles: ['ADMIN'] },
    children: [
      { 
        path: '', 
        component: AdminPanelComponent 
      },
      { 
        path: 'lunches', 
        component: LunchesComponent 
      },
      { 
        path: 'beverages', 
        component: BeveragesComponent 
      },
      { 
        path: 'lunch-from', 
        component: LunchFromComponent 
      },
      {
        canActivate: [RoleGuard],
        data: { roles: ['ADMIN'] },
        path: 'order',
        component:OrderComponent
      }
    ]
  },
  { path: '**', redirectTo: '/menu' }  
];
