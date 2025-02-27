import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CandeactivateGuard implements CanDeactivate<canDeactivateInterface> {
  canDeactivate(
    component: canDeactivateInterface,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot):  boolean {
      return component.formModified();
      
    
  }
  
  
}

export interface canDeactivateInterface{
  formModified():boolean;
}
