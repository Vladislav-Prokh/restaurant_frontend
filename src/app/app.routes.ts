import { Routes } from '@angular/router';
import { LunchesComponent } from './lunches/lunches.component';
import { MainTemplateComponent } from './main-template/main-template.component';
import { BeveragesComponent } from './beverages/beverages.component';
import {LunchFromComponent} from './lunch-from/lunch-from.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
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
        data: { roles: ['DEFAULT', 'ADMIN'] } 
      },
      { 
        path: 'beverages', 
        component: BeveragesComponent,
        data: { roles: ['DEFAULT', 'ADMIN'] } 
      },
    ]
  },
  {
    path: 'admin',
    component: MainTemplateComponent,
    children: [
      { 
        path: '', 
        component: AdminPanelComponent, 
        data: { roles: ['ADMIN'] } 
      },
      { 
        path: 'lunches', 
        component: LunchesComponent,
        data: { roles: ['ADMIN'] } 
      },
      { 
        path: 'beverages', 
        component: BeveragesComponent,
        data: { roles: ['ADMIN'] } 
      },
      { 
        path: 'lunch-from', 
        component: LunchFromComponent,
        data: { roles: ['ADMIN'] }
      }
    ]
  }
];
