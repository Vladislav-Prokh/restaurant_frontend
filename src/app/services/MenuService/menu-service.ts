import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class MenuService {



  private apiUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) {}

  getBeverages(): Observable<any> {
    return this.http.get<any>(this.apiUrl+"/menu/beverages");
  }
  getLunches(): Observable<any> {
    return this.http.get<any>(this.apiUrl+"/menu/lunches");
  }
  deleteLunch(lunch: any) {
    const url = `${this.apiUrl}/menu/lunches/${lunch.lunchId}`;
    return this.http.delete<any>(url).pipe(
      catchError(error => {
        console.error("Ошибка при удалении ланча:", error);
        return throwError(error); 
      })
    );
  }
  addLunch(lunchData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/menu/lunches`, lunchData).pipe(
      catchError(error => {
        console.error("Ошибка при добавлении ланча:", error);
        return throwError(error);
      })
    );
  }

  getMeals(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/menu/meals`);  
  }
  getDesserts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/menu/desserts`);  
  }
}