import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { NgForm } from '@angular/forms';
import { Customer } from '../customer';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { Plan } from '../Plan';
import { PlanService } from '../plan.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  plans: Plan[];
  selectedValue: string;
  selectedFile: File;
  // plans: Plan[] = [
  //   {name: 'Yoga', description: 'Yoga description'},
  //   {name: 'Gain weight', description: 'Gain weight description'},
  //   {name: 'Lose weight', description: 'Lose weight description'}
  // ];

  planControl = new FormControl('', [Validators.required]);


  loading = false;
  newCustomer: Customer;
 // customers: Customer[];

  constructor(private customerService: CustomerService,
    private planservice: PlanService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        //var plan = this.activatedRoute.snapshot.params.plan;
        this.getPlans();
      });

  }

  getPlans(): void {
    console.log("getting plans!");
    this.planservice.getPlans().subscribe(
      plans => this.plans = plans
    );
  
  }

    onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    
    console.log(this.selectedFile.name);
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

    this.customerService.postCustomer(customer,this.selectedFile)
    .subscribe(data => {
      console.log('posting new data');
      form.reset();
      this.newCustomer = data;
      console.log('new data posted');
    });

    this.router.navigateByUrl('/all');
  }
}
