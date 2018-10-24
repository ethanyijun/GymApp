import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Plan } from '../Plan';
import { FormControl, Validators } from '@angular/forms';
import { PlanService } from '../plan.service';

@Component({
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.css']
})
export class CustomerItemComponent implements OnInit {

//planControl = new FormControl('', [Validators.required]);
  selectedValue: string;
  plans: Plan[];
  // plans: Plan[] = [
  //   {name: 'Yoga', description: 'Yoga description'},
  //   {name: 'Gain weight', description: 'Gain weight description'},
  //   {name: 'Lose weight', description: 'Lose weight description'}
  // ];


  @Input() customer: Customer;
// @Output() deleted = new EventEmitter();
  @HostBinding('class') columnClass = 'four wide column';
  constructor(private customers: CustomerService,
    private route: ActivatedRoute,
    private location: Location,
    private planservice: PlanService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.getPlans();
        this.getCustomer();
      });

    console.log("on init");
  }

  getCustomer(): void {
    let id;
    this.route.params.subscribe(params => {
       id = params['id'];
      console.log(params['id']) //log the value of id
    });
  //  console.log("getting customer id: "+id);
    this.customers.getCustomer(id)
      .subscribe(customer => {this.customer = customer;
        this.selectedValue = this.customer.plan});
      
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    let id;
    this.route.params.subscribe(params => {
       id = params['id'];      
     //log the value of id
    });
    this.customer.plan = this.selectedValue;
    console.log("-=-=-=-=: " + this.customer.plan) 
    this.customers.updateCustomer(this.customer,id)
      .subscribe(() => this.goBack());
  }

  getPlans(): void {
    console.log("getting plans!");
    this.planservice.getPlans().subscribe(
      plans => this.plans = plans
    );
  }
  // this.customerService.deleteCustomer(customer.id).subscribe();

}