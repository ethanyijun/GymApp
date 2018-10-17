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

    this.paramsSubscription = this.activatedRoute.params
      .subscribe(params => {
       // let plan = params['plan'];
        // if(plan.toLowerCase() === 'all') {
        //   plan = '';
        // }
        let plan = "yoga";
        this.getCustomers(plan);
      });

   // this.getCustomers();
  }
  
  deleteCustomer(id: string) {
    console.log("customer id: " + id);
   // this.customerService.deleteCustomer(id).subscribe();
    this.customerService.deleteCustomer(id).subscribe(data=>{
      console.log("esdf");



   //---------------------->need to be changed:   this.getCustomers();
    });

    console.log("blabla");
  }
//   regetCustomers(): void{


}
