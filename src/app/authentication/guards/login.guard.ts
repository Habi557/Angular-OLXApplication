import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {
      if(localStorage.getItem("token")==null || localStorage.getItem("token")==""){
        console.log("false "+localStorage.getItem("token"));
        this.route.navigateByUrl('/login');
        return false;
      }else{
        console.log("false "+localStorage.getItem("token"));

        return true;

      }
  }
  
}
