import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { CommonModule } from '@angular/common'; 
import { UserRoleService } from '../services/UserRoleService/user-role.service'
;
@Component({
  selector: 'app-main-template',
  imports: [RouterModule,AuthComponent,CommonModule],
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.css']
})

export class MainTemplateComponent {
  isAdmin: boolean = false;
  isWaiter: boolean = false;

  constructor(private userRoleService: UserRoleService) {
    this.userRoleService.userRole$.subscribe(role => {
      this.isAdmin = role === 'ADMIN';
      this.isWaiter = role === 'WAITER';
    });
  }

}
