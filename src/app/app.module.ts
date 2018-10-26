import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { JoinMemberFormComponent } from './join-member-form/join-member-form.component';
import { CustomerItemComponent } from './customer-item/customer-item.component';
import { SuiModule } from 'ng2-semantic-ui';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { CustomerService } from './customer.service';
import { AuthenticateService } from './authenticate.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatOptionModule,MatSelectModule} from '@angular/material';
import { MessageService } from './message.service';
import { PlanListComponent } from './plan-list/plan-list.component';
import { PlanItemComponent } from './plan-item/plan-item.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { MatDialogModule, MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    CustomerListComponent,
    JoinMemberFormComponent,
    CustomerItemComponent,
    MenuBarComponent,
    PlanListComponent,
    PlanItemComponent,
    MyDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SuiModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatOptionModule,
    ReactiveFormsModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
   BrowserAnimationsModule
  ],
  entryComponents: [
    MyDialogComponent
   ],
    exports: [
      MatSelectModule,
      BrowserAnimationsModule,
      MatOptionModule,
      FormsModule
  ],
  providers: [CustomerService, AuthenticateService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
