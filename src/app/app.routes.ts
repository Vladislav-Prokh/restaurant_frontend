import { Routes } from '@angular/router';
import { LunchesComponent } from './lunches/lunches.component';
import { MainTemplateComponent } from './main-template/main-template.component';
import { BeveragesComponent } from './beverages/beverages.component';
export const routes: Routes = [
    { 
        path: '', 
        component: MainTemplateComponent, 
        children: [
          { path: '', redirectTo: 'lunches', pathMatch: 'full' },
          { path: 'lunches', component: LunchesComponent },
          { path: 'beverages', component: BeveragesComponent },
        ]
      }
];

