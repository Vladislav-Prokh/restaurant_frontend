import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-main-template',
  imports: [RouterModule,AuthComponent],
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.css']
})
export class MainTemplateComponent {
}
