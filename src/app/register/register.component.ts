import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { NgForm } from '@angular/forms';
import { Customer } from '../customer';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { Plan } from '../Plan';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  selectedValue: string;
  plans: Plan[] = [
    {name: 'Yoga', description: 'Yoga description'},
    {name: 'Gain weight', description: 'Gain weight description'},
    {name: 'Lose weight', description: 'Lose weight description'}
  ];

  planControl = new FormControl('', [Validators.required]);
  // animals: Customer[] = [
  //   {firstName: "Leo", lastName: "Zheng", email:"123@123.com", plan: "yoga", phone:"123"},
  //   {firstName: "Huey", lastName: "Kong", email:"123@123.com", plan: "gain weight", phone:"123"},
  // ];


  loading = false;
  newCustomer: Customer;
 // customers: Customer[];

  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit() {


  }


  onSubmit(form: NgForm) {

    //console.log("====="+this.selectedValue);
    this.loading = true;
    
    const formInput = Object.assign({}, form.value);
    // console.log("---",formInput.plans);
    const customer: Customer = {
      firstName: formInput.firstName,
      lastName: formInput.lastName,
      phone: formInput.phone,
      email: formInput.email,
      plan: this.selectedValue
    };

    this.customerService.postCustomer(customer)
    .subscribe(data => {
      console.log('posting new data');
      form.reset();
      this.newCustomer = data;
      console.log('new data posted');
    });

    this.router.navigateByUrl('/customers');
  }
}
