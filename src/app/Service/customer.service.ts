import { Injectable } from '@angular/core';
import { Customer } from '../Model/Customer';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, } from '@angular/common/http';
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
 //   httpOptions = this.authenticate.getAuthorizationOptions();


  constructor(private http: HttpClient, private authenticate: AuthenticateService,
    private messageService: MessageService) { }



    getCustomers(plan: string): Observable<Customer[]> {
      //console.log("get customers in js"+this.url);
      let params = new HttpParams().set('plan', plan);
     // let params = new HttpParams();
     // params.append('plan', plan);
      
      console.log("url in js: " + this.url);

  //   return this.http.get<Customer[]>(this.url, { params: params });
        // .map(response => {
        //   return response.json().mediaItems;
        // });
      //  console.log("auth in js: " + this.httpOptions['Authorization']);
      return this.http.get<Customer[]>(this.url, { headers: this.authenticate.getAuthorizationOptions(), params: params });
    }  


  postCustomer(customer: Customer): Observable<Customer> {
   // const formData = new FormData();
   // formData.append('image',selectedFile, selectedFile.name);
    var Indata = { customer: customer }
    return this.http.post<Customer>(this.registerUrl, Indata, { headers: this.authenticate.getAuthorizationOptions() });

    // console.log("##"+customer);
    // return this.http.post<Customer>(this.registerUrl, customer, this.httpOptions);
  }

  saveFile(selectedFile): Observable<{}> {
    return null;
  }
  // delete one customer
  deleteCustomer (id: string): Observable<{}> {
    const url = `${this.url}/${id}`; // DELETE api/heroes/42
    console.log(url);
    return this.http.delete(url, { headers: this.authenticate.getAuthorizationOptions() });  
      // .pipe(
      //   catchError(this.handleError('deleteHero'))
      // );
  }

  // approve one cusotmer
  approveCustomer(customer: Customer, id: string): Observable<Customer> {
    const url = `${this.url}/${id}`;
    console.log("======"+url);
    return this.http.put(url, customer, { headers: this.authenticate.getAuthorizationOptions() }).pipe(
      tap(_ => this.log(`appoved Customer`)),
      catchError(this.handleError<any>('approveCustomer'))
    );
  }
  
  getCustomer(id: string): Observable<Customer> {
    const url = `${this.url}/${id}`;
    console.log("getting: "+url);
    return this.http.get<Customer>(url, { headers: this.authenticate.getAuthorizationOptions() }).pipe(
      tap(_ => this.log(`fetched customer id=${id}`)),
      catchError(this.handleError<Customer>(`getCustomer id=${id}`))
    );
  }

  updateCustomer(customer: Customer, id: string): Observable<Customer> {
    const url = `${this.url}/${id}`;
    console.log("======"+url);
    return this.http.put(url, customer, { headers: this.authenticate.getAuthorizationOptions()}).pipe(
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
