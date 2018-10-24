import { Component, OnInit } from '@angular/core';
import { Plan } from '../Plan';
import { PlanService } from '../plan.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent implements OnInit {
  plans: Plan[];
  constructor(private planservice: PlanService,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   // console.log(this.activatedRoute.snapshot.params.plan);
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
  
  deletePlan(id: string): void{

     this.planservice.deletePlan(id).subscribe(data=>{
       this.getPlans();
     });
  }

}




