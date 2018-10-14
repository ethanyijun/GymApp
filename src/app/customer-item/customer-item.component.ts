import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.css']
})
export class CustomerItemComponent implements OnInit {

  @Input() customer: Customer;
// @Output() deleted = new EventEmitter();
  @HostBinding('class') columnClass = 'four wide column';
  constructor(private customers: CustomerService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getCustomer();
  }
  getCustomer(): void {
    let id;
    this.route.params.subscribe(params => {
       id = params['id'];
      console.log(params['id']) //log the value of id
    });
  //  console.log("getting customer id: "+id);
    this.customers.getCustomer(id)
      .subscribe(customer => this.customer = customer);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.customers.updateCustomer(this.customer)
      .subscribe(() => this.goBack());
  }
  // this.customerService.deleteCustomer(customer.id).subscribe();

}