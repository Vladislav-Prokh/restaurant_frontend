import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}