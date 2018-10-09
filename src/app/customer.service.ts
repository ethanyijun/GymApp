import { Injectable } from '@angular/core';
import { Customer } from './customer';

import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AuthenticateService } from './authenticate.service';
import { map, catchError } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
// import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  uri = 'http://localhost:4200/customers';
  registerUrl = '/register';

    customers: Customer[];

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

  constructor(private http: HttpClient, private authenticate: AuthenticateService) { }



  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.uri, this.authenticate.getAuthorizationOptions());
  }

  postCustomers(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.registerUrl, customer, this.httpOptions);
  }

  deleteCustomer (id: string): Observable<{}> {
    const url = `${this.uri}/${id}`; // DELETE api/heroes/42
    console.log(url);
    return this.http.delete(url, this.httpOptions);
    
      // .pipe(
      //   catchError(this.handleError('deleteHero'))
      // );
  }

  
}
