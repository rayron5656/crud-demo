import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isAuthenticated:boolean = false;

  private readonly EMAIL_KEY = 'Email';

  constructor(private _router:Router) { 
    
    
  }

  ngOnInit(): void {
    if (localStorage.getItem(this.EMAIL_KEY) === 'abc@gmail.com') {
      this._router.navigate(['dashboard']);
      
    }
    
  }

  onLogin(formValue:any){
    console.log(formValue);
    if (formValue.email === "abc@gmail.com" && formValue.password == 'a12345') {
      this.isAuthenticated = true;
      if (formValue.remember == true) {
        localStorage.setItem(this.EMAIL_KEY,formValue.email);
      }
      this._router.navigate(['dashboard']);
      
    }
    else{
      this.isAuthenticated = false;
    }

  }

}
