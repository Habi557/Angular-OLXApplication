import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private loginservice : LoginService,private router: Router,private snackBar: MatSnackBar,private toaster:ToastrService){}
  data={
    id:'',
    password:'',
    isDisable:false
  };
  login(){
    this.loginservice.login(this.data).subscribe({
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
