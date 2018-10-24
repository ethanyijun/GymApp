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
  ngOnInit() {
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
