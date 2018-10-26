import { Component, OnInit } from '@angular/core';
import { Plan } from '../Plan';
import { PlanService } from '../plan.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';


@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent implements OnInit {
  plans: Plan[];
  constructor(private planservice: PlanService,
  private activatedRoute: ActivatedRoute,
  public dialog: MatDialog) { }
  plan: Plan;

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
  
  //deletePlan(id: string): void{
  //   this.openModal(id);
  //}


  deletePlan(id: string) {
    const dialogConfig = new MatDialogConfig();
    var planTitle: string;

    this.planservice.getPlan(id).toPromise().then(plan => { 
      this.plan = plan;
      console.log("--");
      console.log(plan);
      planTitle = "Delete plan: " + plan['title'];
    }).then(()=>{
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = {
      id: 1,
      title: planTitle
      };
    }).then(()=>{
      const dialogRef = this.dialog.open(MyDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if(result){
           this.planservice.deletePlan(id).subscribe(data=>{
           this.getPlans();
         });
        }
       console.log("Dialog was closed!")
       console.log(result)
      });
    });
  }
}




