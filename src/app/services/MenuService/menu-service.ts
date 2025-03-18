import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environment';
@Injectable({
  providedIn: 'root',
})


export class MenuService {
  private apiUrl = '';

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }


  private deleteItem(endpoint: string, id: string): Observable<any> {
    const url = `${this.apiUrl}/menu/${endpoint}/${id}`;
    return this.http.delete<any>(url).pipe(
      catchError(error => {
        console.error(`Error deleting ${endpoint}:`, error);
        return throwError(() => error);
      })
    );
  }

  private addItem(endpoint: string, data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/menu/${endpoint}`, data).pipe(
      catchError(error => {
        console.error(`Error adding ${endpoint}:`, error);
        return throwError(() => error);
      })
    );
  }

  deleteLunch(lunch: any): Observable<any> {
    if (!lunch || !lunch.lunchId) {
      console.error('Invalid lunch object:', lunch);
      return throwError(() => new Error('Invalid lunch object'));
    }
    return this.deleteItem('lunches', lunch.lunchId);
  }

  deleteBeverage(beverage: any): Observable<any> {
    if (!beverage || !beverage.beverage_id) {
      console.error('Invalid beverage object:', beverage);
      return throwError(() => new Error('Invalid beverage object'));
    }
    return this.deleteItem('beverages', beverage.beverage_id);
  }

  deleteMeal(meal: any): Observable<any> {
    if (!meal || !meal.meal_id) {
      console.error('Invalid meal object:', meal);
      return throwError(() => new Error('Invalid meal object'));
    }
    return this.deleteItem('meals', meal.meal_id);
  }

  deleteDessert(dessert: any): Observable<any> {
    if (!dessert || !dessert.dessertId) {
      console.error('Invalid dessert object:', dessert);
      return throwError(() => new Error('Invalid dessert object'));
    }
    return this.deleteItem('desserts', dessert.dessertId);
  }

  addLunch(lunchData: any): Observable<any> {
    return this.addItem('lunches', lunchData);
  }

  addMeal(mealData: any): Observable<any> {
    return this.addItem('meals', mealData);
  }

  addDessert(dessertData: any): Observable<any> {
    return this.addItem('desserts', dessertData);
  }

  addBeverage(beverageData: any): Observable<any> {
    return this.addItem('beverages', beverageData);
  }

  addAdditional(additionalData: any): Observable<any> {
    return this.addItem('beverage-additionals', additionalData);
  }

  addOrder(orderData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/orders`, orderData).pipe(
      catchError(error => {
        console.error('Error adding order:', error);
        return throwError(() => error);
      })
    );
  }

  getMeals(page: number = 0, size: number = 10): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/menu/meals`, {
      params: {
        page: page.toString(),
        size: size.toString(),
      },
    });
  }
  getDesserts(page: number = 0, size: number = 10): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/menu/desserts`, {
      params: {
        page: page.toString(),
        size: size.toString(),
      },
    });
  }

  getBeverages(page: number = 0, size: number = 10): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/menu/beverages`, {
      params: {
        page: page.toString(),
        size: size.toString(),
      },
    });
  }

  getLunches(page: number = 0, size: number = 10): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/menu/lunches`, {
      params: {
        page: page.toString(),
        size: size.toString(),
      },
    });
  }

  getAdditionals(page: number = 0, size: number = 10): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/menu/additionals`, {
      params: {
        page: page.toString(),
        size: size.toString(),
      },
    });
  }

  findLunchesByQuery(searchQuery: String,lunchesPriceEdge: string, priceEdge:number): Observable<any>  {
    return this.http.get<any>(`${this.apiUrl}/elastic/lunches`, {
      params: {
        query: searchQuery.toString(),
        lunchesPriceEdgeCondition: lunchesPriceEdge.toString(),
        priceEdge: priceEdge.toString(),
      }
    })
  }

  getEdgeCounts(priceEdge: number):Observable<any>  {
    return this.http.get<any>(`${this.apiUrl}/elastic/lunches/price-edge`, {
      params: {
        priceEdge: priceEdge.toString(),
      }
    })
  }

  getLunchById(lunchId: number) :Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/menu/lunches/${lunchId}`);
  }

  getFact(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/ai/fact`, {});
  }
}
