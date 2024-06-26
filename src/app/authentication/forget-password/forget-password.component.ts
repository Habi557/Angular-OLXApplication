import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
placeHolder: String="Enter Username";
inputText:any;
buttionDisable: boolean=true;
otpFlag:boolean= true;
invalidEmail: boolean=true;
spinner: boolean=false;
otp:Number
  constructor(private loginService: LoginService, private router: Router){}
 

checkUserName() {
  this.placeHolder="Enter OTP";
  this.spinner=true;
  this.loginService.checkUserName(this.inputText).subscribe(
    {
      next:(response)=>{
        localStorage.setItem("email",this.inputText);
         this.inputText="";
         //this.placeHolder=" Enter OTP";
         this.buttionDisable=false;
         this.otpFlag=false;
         this.invalidEmail=true
         this.spinner=false;

      },
      error:(err)=>{
        console.log("error");
        this.invalidEmail=false;
        this.otpFlag=true
      }
    }
  )
}
verifyEmail() {
  console.log("test");
  this.loginService.validateOtp(localStorage.getItem("email") ||'{}',this.inputText).subscribe({
    next:(response)=>{
       console.log(response);
    },
    error:(err)=>{

    }
  })
}
back(){
  this.router.navigateByUrl('/login');
}

}
