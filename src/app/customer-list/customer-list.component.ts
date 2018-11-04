import { Component, OnInit } from '@angular/core';
import { Customer } from '../Model/Customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../Service/customer.service';
import { Observable } from 'rxjs';
import { getRandomString } from 'selenium-webdriver/safari';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AuthenticateService } from '../Service/authenticate.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  loggedIn;
  customers: Customer[];
  paramsSubscription;
  selectedCustomer: Customer;
  constructor(private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private spinnerService: Ng4LoadingSpinnerService,
    private router: Router,
    private authenticate: AuthenticateService) { 
     
    }





  getCustomers(plan): void {
    this.spinnerService.show();
    console.log("getting customers!");
    this.customerService.getCustomers(plan).toPromise().then(
      customers => this.customers = customers
      ,(err) => {
        
        if (err.status === 401) { 
          console.log(this.authenticate.isLoggedIn());
          console.log("2222222");   
          this.router.navigate(['/login']);}
          else {
            console.log("333");
          }
    }
    ).then(()=>{
       this.spinnerService.hide();
      });
  }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params.plan);
    this.loggedIn = this.authenticate.isLoggedIn();
    console.log("...."+this.loggedIn);
    this.activatedRoute.params.subscribe(
      params => {
        var plan = this.activatedRoute.snapshot.params.plan;
        this.getCustomers(plan);
        console.log("on init" + plan);
      }
  );

  }
  
//  deleteCustomer(id: string) {
  //  this.openModal(id);
  //   console.log("customer id: " + id);
  //  // this.customerService.deleteCustomer(id).subscribe();
  //   this.customerService.deleteCustomer(id).subscribe(data=>{
  //     console.log("esdf");
  //     this.getCustomers("all");
  //   });
 // }

 approveCustomer(id: string) {
  const dialogConfig = new MatDialogConfig();
  var customerName: string;

  this.customerService.getCustomer(id).toPromise().then(customer => { 
    this.selectedCustomer = customer;
    customerName = "Approve customer: " + customer['firstName'] + ' ' +customer['lastName'] ;
  }).then(()=>{
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
    id: 1,
    title: customerName
    };
  }).then(()=>{
    const dialogRef = this.dialog.open(MyDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
         this.selectedCustomer.approved = "Y";
         console.log("--");
         console.log(this.selectedCustomer);
         this.customerService.approveCustomer(this.selectedCustomer, id).subscribe(data=>{
         this.getCustomers("all");
       });
      }
     console.log("Dialog was closed!")
     console.log(result)
    });
  });
}

 // delete one customer
 deleteCustomer(id: string) {
    const dialogConfig = new MatDialogConfig();
    var customerName: string;

    this.customerService.getCustomer(id).toPromise().then(customer => { 
      this.selectedCustomer = customer;
      console.log("--");
      console.log(customer);
      customerName = "Delete customer: " + customer['firstName'] + ' ' +customer['lastName'] ;
    }).then(()=>{
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = {
      id: 1,
      title: customerName
      };
    }).then(()=>{
      const dialogRef = this.dialog.open(MyDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if(result){
           this.customerService.deleteCustomer(id).subscribe(data=>{
           this.getCustomers("all");
         });
        }
       console.log("Dialog was closed!")
       console.log(result)
      });
    });
  }
}
