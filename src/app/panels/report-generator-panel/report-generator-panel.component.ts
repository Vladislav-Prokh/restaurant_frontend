import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {environment} from '../../environment';
import {NgForOf, NgIf} from '@angular/common';
import {EmployeeService} from '../../services/EmployeeService/employee.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-report-generator-panel',
  imports: [
    FormsModule,
    NgForOf,
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './report-generator-panel.component.html',
  styleUrl: './report-generator-panel.component.css'
})
export class ReportGeneratorPanelComponent {
  apiUrl = environment.apiUrl;
  protected reportForm: FormGroup;
  protected reportTypes: string[] = [];
  totalPages = 0;
  pageWaiterSize: number = 10;
  pageWaiterNumber: number = 0;
  waiters: any;
  dateError: boolean = false;

  constructor(private formBuilder: FormBuilder,private employeeService: EmployeeService, private http : HttpClient) {
    this.reportTypes = environment.report_types;
    this.reportForm = formBuilder.group({
      reportType: ['pdf', Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      waiterEmail: ['', Validators.required],
    })
    this.employeeService.getEmployees(this.pageWaiterNumber,this.pageWaiterSize).subscribe(
      data => {
        this.waiters = data.content.filter((user: { role: string; }) => user.role === "WAITER");

        this.totalPages = data.totalPages;
      }
    )
  }

  nextPage(): void {
    if(this.pageWaiterNumber < this.totalPages-1 ) {
      this.pageWaiterNumber += 1;
    }
    this.getEmployees();

  }
  previousPage(): void {
    if(this.pageWaiterNumber > 0) {
      this.pageWaiterNumber -= 1;
    }
     this.getEmployees();
  }

  getEmployees(){
    this.employeeService.getEmployees(this.pageWaiterNumber,this.pageWaiterSize).subscribe(
      data => {
        this.waiters = data.content.filter((user: { role: string; }) => user.role === "WAITER");
      }
    )
  }

  onSubmit() {
    const startDate = this.reportForm.get('startDate')?.value;
    const endDate = this.reportForm.get('endDate')?.value;

    if(this.compareDates(startDate,endDate) !== 1){
      this.dateError = true;
      return;
    }
    this.http.post(`${this.apiUrl}/reports`, this.reportForm.value, {
      responseType: 'blob'
    }).subscribe(
      (response) => {
        const blob = new Blob([response], { type: response.type });
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'report'+'.'+`${this.reportForm.get("reportType")?.value}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      },
      (error) => console.error("Error generating report", error)
    );

  }

  compareDates(dStr1: string , dStr2:string) {
    const d1: Date = new Date(dStr1);
    const d2: Date = new Date(dStr2);
    if(dStr1 == null || dStr2 == null){
      return -1;
    }
    if (d1.getTime() < d2.getTime()) {
      return 1;
    } else {
      return -1;
    }
  }
}
