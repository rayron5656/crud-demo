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
import { MenuComponent } from './Components/menu/menu.component';
import { AddCrouseComponent } from './components/add-crouse/add-crouse.component';
import { DeleteCourseComponent } from './components/delete-course/delete-course.component';
import { UpdateCourseComponent } from './components/update-course/update-course.component';
import {HttpClientModule  } from '@angular/common/http'

const appRoute:Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'courses',component:CoursesComponent},
  {path:'courses/add-course',component:AddCrouseComponent},
  {path:'courses/Edit/:id',component:UpdateCourseComponent},
  {path:'courses/delete/:id',component:DeleteCourseComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CoursesComponent,
    MenuComponent,
    AddCrouseComponent,
    DeleteCourseComponent,
    UpdateCourseComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
