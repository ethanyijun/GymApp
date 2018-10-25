import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Plan } from '../Plan';
import { PlanService } from '../plan.service';

@Component({
  selector: 'app-plan-item',
  templateUrl: './plan-item.component.html',
  styleUrls: ['./plan-item.component.css']
})
export class PlanItemComponent implements OnInit {

  constructor(private plans: PlanService, 
  private route: ActivatedRoute,
  private location: Location) { }
  @Input() plan: Plan;
  @Input() isDone: boolean;
  ngOnInit() {
    let id;
    this.route.params.subscribe(params => {
      id = params['id'];
      if(id === undefined){
        this.isDone = false;
        console.log("undddd");
      }else{
        this.isDone = true;
        this.getPlan(id);
        console.log("deeeee");
      }

    });
  }

  getPlan(id: string): void {
  //  console.log("getting customer id: "+id);
    this.plans.getPlan(id)
    .subscribe(plan => {this.plan = plan;});
      
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

    this.plans.updatePlan(this.plan,id)
      .subscribe(() => this.goBack());
  }
}
