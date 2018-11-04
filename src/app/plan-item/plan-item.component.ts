import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Plan } from '../Model/Plan';
import { PlanService } from '../Service/plan.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan-item',
  templateUrl: './plan-item.component.html',
  styleUrls: ['./plan-item.component.css']
})
export class PlanItemComponent implements OnInit {

  constructor(private plans: PlanService, 
  private route: ActivatedRoute,
  private location: Location,
  private router: Router) { }
  selectedFile: File;


  @Input() plan: Plan;
 // @Input() isDone: boolean;
  ngOnInit() {
    let id;
    this.route.params.subscribe(params => {
      id = params['id'];
      if(id === undefined){
        console.log("undddd");
      }else{
        this.getPlan(id);
        console.log("deeeee");
      }

    });
  }

  // upload icon
  // onFileChanged(event) {
  //   this.selectedFile = event.target.files[0]
  // }

  getPlan(id: string): void {
  //  console.log("getting customer id: "+id);
    this.plans.getPlan(id)
    .toPromise().then(plan => {this.plan = plan;},(err) => {
      console.log("status: "+err.status);  
      if (err.status === 401) { 
       // console.log(this.authenticate.isLoggedIn());
        console.log("2222222");   
        this.router.navigate(['/login']);}
        else {
          console.log("333");
        }
  });
      
  }

  goBack(): void {
    this.location.back();
  }

  save(title: string): void {
    console.log("000-"+title);
    let id;
    this.route.params.subscribe(params => {
        id = params['id'];      
        if(id === undefined) {
         
        }
        else {
          this.plans.updatePlan(this.plan,id)
          .subscribe(() => this.goBack());
      }
     //log the value of id
    });

    // this.plans.updatePlan(this.plan,id)
    //   .subscribe(() => this.goBack());
    this.plans.updatePlan(this.plan,id)
    .subscribe(() => this.router.navigateByUrl('/plans'));
      
  }

  // onUpload() {
  //   // this.http is the injected HttpClient 
  //   alert("onupload!");
  // }

  onSubmit(form: NgForm) {

    //console.log("====="+this.selectedValue);
    //this.loading = true;
    
    const formInput = Object.assign({}, form.value);
    // console.log("---",formInput.plans);
    const plan: Plan = {
      title: formInput.title,
      coach: formInput.coach,
      type: formInput.type,
    };

    this.plans.postPlan(plan)
    .subscribe(data => {
      console.log('posting new plan');
      form.reset();
      this.plan = data;
      console.log('new plan posted');
      this.router.navigateByUrl('/plans');
    });

    
  }
}
