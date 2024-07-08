import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UCustomer } from '../common/u-customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private baseUrl = "http://localhost:8083/api/auth/customer"
  constructor(private httpClient: HttpClient) { }

  getCustomerById(id: number): Observable<UCustomer> {
    return this.httpClient.get<UCustomer>(`${this.baseUrl}/${id}`);
  }

  getCustomerList(): Observable<UCustomer[]> {
    return this.httpClient.get<UCustomer[]>(`${this.baseUrl}`);
  }

  updateCustomer(id: number, customer: UCustomer): Observable<UCustomer> {
    return this.httpClient.put<UCustomer>(`${this.baseUrl}/${id}`, customer);

  }


}
