import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  googleOAuth2Login:boolean=false;
  constructor(private loginservice : LoginService,private router: Router,private fb: FormBuilder,private toaster:ToastrService,private route: ActivatedRoute){
    this.loginForm = this.fb.group({
      id: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  data={
    userName:'',
    password:'',
    isDisable:false
  };
  ngOnInit(): void {
    if(this.googleLogin){
      this.route.queryParamMap.subscribe(params => {
         localStorage.setItem("token", params.get('token')||'{}'); 
              });
    }
  }
  login(){
    if(this.loginForm.valid){
    this.loginservice.login(this.loginForm.value).subscribe({
      next:(response: any)=> {
        console.log(response)
        localStorage.setItem("token", response.token||'{}'); 
         console.log(response.token);
     //this.router.navigateByUrl('/dashboard');
     this.router.navigate(['/dashboard'], { queryParams: { pageNo: 0 } });
    },
      error:(err: HttpErrorResponse) =>{
      //let snackBarRef = this.snackBar.open('Invalid UserName or password', 'Undo');
      this.toaster.error("Invalid UserName or password");
        console.log(err);
        
      }
    })
  }

}
googleLogin() {
//   this.loginservice.googleLogin().subscribe({
//     next:(res)=>{
//       console.log(res)
//     },
//     error:(err)=>{
//       console.log(err);
      
//     }
//   })
const oauth2Url = 'http://localhost:8082/oauth2/authorization/google';
window.location.href = oauth2Url; // Redirect the user to the backend OAuth2 URL
this.googleOAuth2Login=true;
}
}
