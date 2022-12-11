import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { UserComplaintComponent } from './user-complaint/user-complaint.component';
import { AddComplaintComponent } from './add-complaint/add-complaint.component';

const myRoutes:Routes = [
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"userlogin",
    component:UserLoginComponent
  },
  {
    path:"userReg",
    component:UserRegComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"userProfile",
    component:UserProfileComponent
  },
  {
    path:"viewAdminComplaint",
    component: ComplaintComponent
  },
  {
    path:"viewUserComplaint",
    component: UserComplaintComponent
  },
  {
    path:"addComplaint",
    component: AddComplaintComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserRegComponent,
    DashboardComponent,
    AdminNavComponent,
    UserProfileComponent,
    NavbarComponent,
    ComplaintComponent,
    UserComplaintComponent,
    AddComplaintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
