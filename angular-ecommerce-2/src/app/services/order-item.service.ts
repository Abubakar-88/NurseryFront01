import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderItem2 } from '../common/order-item2';
// export interface OrderItem {
//   imageUrl: string;
//   unitPrice: number;
//   quantity: number;
//   productId: string;
// }
@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

 
  private baseUrl = "http://localhost:8444/api/orders"
  constructor(private httpClient: HttpClient) { }

  

  getOrderItemList(id: number): Observable<OrderItem2[]> {
    return this.httpClient.get<OrderItem2[]>(`${this.baseUrl}/${id}`);
  }

//   getOrderItemList(id: number): Observable<OrderItem2> {

//     //need to build URL Based on the customer email
//     const orderHistoryUrl = `${this.baseUrl}/{id}`;

//     return this.httpClient.get<GetResponseOrderHistory>(orderHistoryUrl);
//   }
// }
}
interface GetResponseOrderHistory {
  _embedded: {
    orders: OrderItem2[];
  }
}
