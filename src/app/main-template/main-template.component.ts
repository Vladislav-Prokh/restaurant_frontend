import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import {GoogleAuthService} from '../services/GoogleAuth/google-auth.service';
@Component({
  selector: 'app-main-template',
  imports: [RouterModule,AuthComponent],
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.css']
})

export class MainTemplateComponent {
  isAdmin: boolean = false;

  constructor(private authService: GoogleAuthService) {}

}
