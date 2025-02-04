import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../services/EmployeeService/employee.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '../../environment';
@Component({
  selector: 'app-employee-panel',
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-panel.component.html',
  styleUrl: './employee-panel.component.css'
})

export class EmployeePanelComponent implements OnInit{

  employees: any[] = [];
  roles: string[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.roles = environment.roles;
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        this.employees = data.content;
      },
      error: (error) => {
        console.error('There is a fail with loading employees:', error);
      }
    });
  }
  deleteEmployee(employeeId: number): void {
    this.employeeService.deleteEmployee(employeeId).subscribe(() => {
      this.employees = this.employees.filter(emp => emp.id !== employeeId);
      window.location.reload();
    });
  }

  assignRole(employee: any): void {
    if (employee.selectedRole) {
      this.employeeService.assignRole(employee.employeeId, employee.selectedRole).subscribe(() => {
        window.location.reload();
      });
    }
  }
}
