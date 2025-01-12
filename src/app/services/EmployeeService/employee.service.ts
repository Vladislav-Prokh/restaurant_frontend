import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = ''; 

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  getEmployees(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/employees`).pipe(
      catchError(error => {
        console.error("Can not get employees:", error);
        return throwError(error);
      })
    );
  }

  deleteEmployee(employeeId: number): Observable<any> {
    const url = `${this.apiUrl}/employees/${employeeId}`;
    return this.http.delete<any>(url, { withCredentials: true }).pipe(
      catchError(error => {
        console.error("Не удалось удалить сотрудника:", error);
        return throwError(error);
      })
    );
  }
  assignRole(employeeId: number, role: string): Observable<any> {
    const url = `${this.apiUrl}/employees/${employeeId}/role`;
    const data = { role };
    return this.http.post<any>(url, data, { withCredentials: true }).pipe(
      catchError(error => {
        console.error("Can not assign role:", error);
        return throwError(error);
      })
    );
  }
  
}
