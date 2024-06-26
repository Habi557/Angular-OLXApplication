import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { LogoutService } from 'src/app/authentication/services/logout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router : Router,private logoutservice:LogoutService){}
  logout(){
    let token=localStorage.getItem("token") || '{}';
    this.logoutservice.logout(token).subscribe({
      next:(response)=>{
        console.log("logout")
        console.log(response);
        localStorage.clear();
    console.log(localStorage.getItem('token'));
    //this.router.navigateByUrl('/login');

      },
      error:(err) =>{
        console.log("error")
      }
    }
      
    )
    


  }

}
