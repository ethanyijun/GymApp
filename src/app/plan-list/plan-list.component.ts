import { Component, OnInit } from '@angular/core';
import { Plan } from '../Model/Plan';
import { PlanService } from '../plan.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent implements OnInit {
  plans: Plan[];
  constructor(private planservice: PlanService,
  private activatedRoute: ActivatedRoute,
  public dialog: MatDialog,
  private spinnerService: Ng4LoadingSpinnerService) { }
  plan: Plan;

  ngOnInit() {
   // console.log(this.activatedRoute.snapshot.params.plan);
    this.activatedRoute.params.subscribe(
      params => {
        //var plan = this.activatedRoute.snapshot.params.plan;
        this.getPlans();
      });
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
}
  getPlans(): void {
    this.spinnerService.show();
    console.log("getting plans!");

    
    this.planservice.getPlans().subscribe(
      plans => {
        this.plans = plans
        this.spinnerService.hide();
    });
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




