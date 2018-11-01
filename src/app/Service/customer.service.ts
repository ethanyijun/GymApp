import { Injectable } from '@angular/core';
import { Customer } from '../Model/Customer';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AuthenticateService } from './authenticate.service';
import { map, catchError, tap } from 'rxjs/operators';
import { URLSearchParams } from '@angular/http';
import {  HttpParams } from '@angular/common/http';
// import 'rxjs/add/operator/map';import { catchError, map, tap } from 'rxjs/operators';
// import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url = '/api/customers';
  registerUrl = '/api/register';

    customers: Customer[];

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

  constructor(private http: HttpClient, private authenticate: AuthenticateService,
    private messageService: MessageService) { }



    getCustomers(plan: string): Observable<Customer[]> {
      //console.log("get customers in js"+this.url);
      let params = new HttpParams().set('plan', plan);
      //const url = `${this.url}/${plan}`; 
      console.log("url in js: " + this.url);
      // return this._HttpClient.get(`${API_URL}/api/v1/data/logs`, { params: params })
      // let searchParams = new URLSearchParams();
      // searchParams.append('plan', plan);

      return this.http.get<Customer[]>(this.url, { params: params });
        // .map(response => {
        //   return response.json().mediaItems;
        // });
  
   //   return this.http.get<Customer[]>(this.url, this.authenticate.getAuthorizationOptions());
    }  

//   getCustomers(plan): Observable<Customer[]> {
//     console.log("get customers in js"+this.url);
//     let params = new HttpParams().set('plan', plan);

//     // return this._HttpClient.get(`${API_URL}/api/v1/data/logs`, { params: params })
//     // let searchParams = new URLSearchParams();
//     // searchParams.append('plan', plan);
//     return this.http.get<Customer[]>(this.url, { params: params });
//       // .map(response => {
//       //   return response.json().mediaItems;
//       // });

//  //   return this.http.get<Customer[]>(this.url, this.authenticate.getAuthorizationOptions());
//   }

  postCustomer(customer: Customer): Observable<Customer> {
   // const formData = new FormData();
   // formData.append('image',selectedFile, selectedFile.name);
    // var Indata = { customer: customer}

    console.log("##"+customer);
    return this.http.post<Customer>(this.registerUrl, customer, this.httpOptions);
  }

  saveFile(selectedFile): Observable<{}> {
    return null;
  }
  // delete one customer
  deleteCustomer (id: string): Observable<{}> {
    const url = `${this.url}/${id}`; // DELETE api/heroes/42
    console.log(url);
    return this.http.delete(url, this.httpOptions);  
      // .pipe(
      //   catchError(this.handleError('deleteHero'))
      // );
  }

  // approve one cusotmer
  approveCustomer(customer: Customer, id: string): Observable<Customer> {
    const url = `${this.url}/${id}`;
    console.log("======"+url);
    return this.http.put(url, customer, this.httpOptions).pipe(
      tap(_ => this.log(`appoved Customer`)),
      catchError(this.handleError<any>('approveCustomer'))
    );
  }
  
  getCustomer(id: string): Observable<Customer> {
    const url = `${this.url}/${id}`;
    console.log("getting: "+url);
    return this.http.get<Customer>(url).pipe(
      tap(_ => this.log(`fetched customer id=${id}`)),
      catchError(this.handleError<Customer>(`getCustomer id=${id}`))
    );
  }

  updateCustomer(customer: Customer, id: string): Observable<Customer> {
    const url = `${this.url}/${id}`;
    console.log("======"+url);
    return this.http.put(url, customer, this.httpOptions).pipe(
      tap(_ => this.log(`updated Customer`)),
      catchError(this.handleError<any>('updateCustomer'))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
