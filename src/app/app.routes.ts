import { Routes } from '@angular/router';
import { LunchesComponent } from './lunches/lunches.component';
import { MainTemplateComponent } from './main-template/main-template.component';
import { BeveragesComponent } from './beverages/beverages.component';
import {LunchFromComponent} from './lunch-from/lunch-from.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
export const routes: Routes = [
    { 
        path: '', 
        component: MainTemplateComponent, 
        children: [
          { path: '', redirectTo: 'lunches', pathMatch: 'full' },
          { path: 'lunches', component: LunchesComponent },
          { path: 'beverages', component: BeveragesComponent },
        ]
    },
    {
      path:'admin',
      component: MainTemplateComponent,
      children:[
        { path: '', component: AdminPanelComponent },
        { path: 'lunches', component: LunchesComponent },
        { path: 'beverages', component: BeveragesComponent },
        {path: 'lunch-from',component: LunchFromComponent},
      ]
    }
];

