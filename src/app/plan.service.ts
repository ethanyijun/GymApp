import { Injectable } from '@angular/core';
import { Plan } from './Plan';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AuthenticateService } from './authenticate.service';
import { map, catchError, tap } from 'rxjs/operators';
import { URLSearchParams } from '@angular/http';
import {  HttpParams } from '@angular/common/http';






@Injectable({ providedIn: 'root' })
export class PlanService {
    url = '/api/plans';
  
      plans: Plan[];
  
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
  
    constructor(private http: HttpClient, private authenticate: AuthenticateService,
      private messageService: MessageService) { }

  
      getPlans(): Observable<Plan[]> {
        // let params = new HttpParams().set('plan', plan);
        console.log("url in js: " + this.url);
        return this.http.get<Plan[]>(this.url);
    }  
}
