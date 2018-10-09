import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.css']
})
export class CustomerItemComponent implements OnInit {

  @Input() customer: Customer;
// @Output() deleted = new EventEmitter();
  @HostBinding('class') columnClass = 'four wide column';
  constructor(private customers: CustomerService) { }

  ngOnInit() {
  }

  // this.customerService.deleteCustomer(customer.id).subscribe();

}
