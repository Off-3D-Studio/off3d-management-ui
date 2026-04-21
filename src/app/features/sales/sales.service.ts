import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Removi o import do environment que estava dando erro!

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  // Coloque a URL do seu backend Java diretamente aqui
  // Geralmente é http://localhost:8080/api/customers
  private readonly API = 'http://localhost:8080/customers'; 

  constructor(private http: HttpClient) {}

  listCustomers(): Observable<any[]> {
    return this.http.get<any[]>(this.API);
  }

  saveCustomer(customer: any): Observable<any> {
    return this.http.post<any>(this.API, customer);
  }
}