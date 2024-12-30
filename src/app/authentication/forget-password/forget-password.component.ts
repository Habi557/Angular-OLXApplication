import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
placeHolder: String="Enter Email";
inputText:any;
buttionDisable: boolean=true;
otpFlag:boolean= true;
invalidEmail: boolean=true;
spinner: boolean=false;
otp:Number
  constructor(private loginService: LoginService, private router: Router){}
 

checkEmail() {
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
        this.otpFlag=true;
        this.spinner=false;
       alert("Incorrect Email");
      }
    }
  )
}
verifyOtp() {
  this.spinner=true;
    this.loginService.validateOtp(localStorage.getItem("email") ||'{}',this.inputText).subscribe({
    next:(response)=>{
      this.placeHolder="Enter New Password";
      this.spinner=false;


       console.log(response);
    },
    error:(err)=>{
      this.spinner=false;
       alert("Incorrect OTP");
    }
  })
}
back(){
  this.router.navigateByUrl('/login');
}


}
