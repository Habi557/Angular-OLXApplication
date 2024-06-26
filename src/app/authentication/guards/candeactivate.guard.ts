import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PostAdvertismentComponent } from 'src/app/pages/modules/dashboard/post-advertisment/post-advertisment.component';

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
