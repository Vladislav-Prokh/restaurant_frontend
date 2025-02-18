import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environment';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-orders',
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {

  orders:any = [];
  apiUrl:string = environment.apiUrl;
  currentPage: number = 0;
  pageSize: number = 9;
  totalPages: number = 0;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
   this.loadOrders();
  }

  public  loadOrders(): void {
    this.http.get<any>(`${this.apiUrl}/orders`,
    {
      params:{
        page: this.currentPage,
        size: this.pageSize,
      }
    }).subscribe(
      (response) => {
        this.orders = response.content;
        this.totalPages = Math.ceil(response.page.totalElements / this.pageSize);
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    );
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadOrders();
    }
  }

  goToPreviousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadOrders();
    }
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
