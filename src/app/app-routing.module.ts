import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { JoinMemberFormComponent } from './join-member-form/join-member-form.component';
import { CustomerItemComponent } from './customer-item/customer-item.component';
import { PlanListComponent } from './plan-list/plan-list.component';
import { PlanItemComponent } from './plan-item/plan-item.component';


const routes: Routes = [
  {path: '', redirectTo: 'register', pathMatch: 'full' },

  {path: 'register', component: RegisterComponent},

  {path: 'login', component: LoginComponent },

  {path: 'customers', component: CustomerListComponent },
  
  { path: 'plans', component: PlanListComponent },

  { path: 'newplan', component: PlanItemComponent },

  { path: 'detail/:id', component: CustomerItemComponent },

  { path: 'plan-detail/:id', component: PlanItemComponent }, 

  // {path: 'customers/:plan', component: CustomerListComponent },

  { path: ':plan', component: CustomerListComponent },


  { path: '**', component: LoginComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
