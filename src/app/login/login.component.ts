import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../Service/customer.service';
import { AuthenticateService } from '../Service/authenticate.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AlertService } from '../Service/index';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticate: AuthenticateService,
              private router: Router,
              private alertService: AlertService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const input = form.value;
    console.log(input);
    const payload = {
      username: input.username,
      password: input.password
    };

    console.log('onSubmit');
    this.authenticate.post(payload)
    .toPromise().then(data => {
      console.log('subscribing');
      console.log(data);
      this.authenticate.setToken(data.token);
      //localStorage.setItem('access_token',data.token);
      console.log("??"+this.authenticate.isLoggedIn());

     // this.authenticate.isLoggedIn()?   this.alertService.success("login success!"):  this.alertService.success("Login incorrect!");
      this.router.navigate(['/all']);
    },(err) => {
      this.alertService.clear();   
      if (err.status === 401) { 
        console.log(this.authenticate.isLoggedIn());
        console.log("2222222");   
        this.alertService.info("Login incorrect!");}
        else if (err.status == 404) {
          this.alertService.info("User not exist!");
          console.log("333");
        }
        else {
          this.alertService.info("Login failed!");
        }
    });
  }
}
