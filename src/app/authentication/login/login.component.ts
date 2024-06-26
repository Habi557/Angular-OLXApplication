import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private loginservice : LoginService,private router: Router,private snackBar: MatSnackBar){}
  data={
    userName:'',
    password:''
  };
  login(){
    this.loginservice.login(this.data).subscribe({
      next:(response)=> {
        localStorage.setItem("token", response.body||'{}'); 
         console.log(response.body);
     this.router.navigateByUrl('/dashboard');
      },
      error:(err) =>{
      let snackBarRef = this.snackBar.open('Invalid UserName or password', 'Undo');
        
      }
    })

}
}
