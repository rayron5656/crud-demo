import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isAuthenticated:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(formValue:any){
    console.log(formValue);
    if (formValue.email === "abc@gmail.com" && formValue.password == 'a12345') {
      this.isAuthenticated = true;
      if (formValue.remember = true) {
        
      }
      
    }
    else{
      this.isAuthenticated = false;
    }

  }

}
