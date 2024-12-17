import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class MenuService {
  private apiUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) {}

  private deleteItem(endpoint: string, id: string) {
    const url = `${this.apiUrl}/menu/${endpoint}/${id}`;
    return this.http.delete<any>(url).pipe(
      catchError(error => {
        console.error(`Can not delete ${endpoint}:`, error);
        return throwError(error);
      })
    );
  }

  private addItem(endpoint: string, data: any) {
    return this.http.post<any>(`${this.apiUrl}/menu/${endpoint}`, data).pipe(
      catchError(error => {
        console.error(`Can not add ${endpoint}:`, error);
        return throwError(error);
      })
    );
  }

  deleteLunch(lunch: any) {
    return this.deleteItem('lunches', lunch.lunchId);
  }

  deleteBeverage(beverage: any) {
    return this.deleteItem('beverages', beverage.beverageId);
  }

  deleteMeal(meal: any) {
    return this.deleteItem('meals', meal.mealId);
  }

  deleteDessert(dessert: any) {
    return this.deleteItem('desserts', dessert.dessertId);
  }

  addLunch(lunchData: any) {
    return this.addItem('lunches', lunchData);
  }

  addMeal(mealData: any) {
    return this.addItem('meals', mealData);
  }

  addDessert(dessertData: any) {
    return this.addItem('desserts', dessertData);
  }

  addBeverage(beverageData: any) {
    return this.addItem('beverages', beverageData);
  }

  addAdditional(additionalData: any) {
    return this.addItem('beverage-additionals', additionalData);
  }

  addOrder(orderData: any) {
    return this.http.post<any>(`${this.apiUrl}/orders`, orderData).pipe(
      catchError(error => {
        console.error(`Can not add order:`, error);
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

  getBeverages(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/menu/beverages`);
  }

  getLunches(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/menu/lunches`);
  }

  getAdditionals() {
    return this.http.get<any>(`${this.apiUrl}/menu/additionals`);
  }
}
