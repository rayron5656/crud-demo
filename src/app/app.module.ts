import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Routes,RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CoursesComponent } from './Components/courses/courses.component';

const appRoute:Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'courses',component:CoursesComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CoursesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoute),
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
