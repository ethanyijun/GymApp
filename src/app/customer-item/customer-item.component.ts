import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Plan } from '../Plan';

@Component({
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.css']
})
export class CustomerItemComponent implements OnInit {
  selectedValue: string;
  plans: Plan[] = [
    {name: 'Yoga', description: 'Yoga description'},
    {name: 'Gain weight', description: 'Gain weight description'},
    {name: 'Lose weight', description: 'Lose weight description'}
  ];


  @Input() customer: Customer;
// @Output() deleted = new EventEmitter();
  @HostBinding('class') columnClass = 'four wide column';
  constructor(private customers: CustomerService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getCustomer();
    console.log(this.customer);
  //  this.selectedValue = this.customer.plan;
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
      console.log(params['id']) //log the value of id
    });
   //console.log("customer to be updated: "+this.customer.firstName);
    this.customers.updateCustomer(this.customer,id)
      .subscribe(() => this.goBack());
  }
  // this.customerService.deleteCustomer(customer.id).subscribe();

}