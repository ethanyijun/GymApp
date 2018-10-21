import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Observable } from 'rxjs';
import { getRandomString } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];
  paramsSubscription;
  selectedCustomer: Customer;
  constructor(private customerService: CustomerService,
    private activatedRoute: ActivatedRoute) { }





  getCustomers(plan): void {
    console.log("getting customers!");
    this.customerService.getCustomers(plan).subscribe(
      customers => this.customers = customers
    );

  }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params.plan);
    this.activatedRoute.params.subscribe(
      params => {
        var plan = this.activatedRoute.snapshot.params.plan;
        this.getCustomers(plan);
        console.log("on init" + plan);
      }
  );

  }
  
  deleteCustomer(id: string) {
    console.log("customer id: " + id);
   // this.customerService.deleteCustomer(id).subscribe();
    this.customerService.deleteCustomer(id).subscribe(data=>{
      console.log("esdf");
      this.getCustomers("all");
    });

  }

}
