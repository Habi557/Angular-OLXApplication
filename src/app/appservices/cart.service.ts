import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Advertisment } from '../models/advertisment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  private cartAddedIteam =new BehaviorSubject<Advertisment>(null);
  cartAddedIteamsObservables= this.cartAddedIteam.asObservable();
  addToCart(cartValue : Advertisment){
    this.cartAddedIteam.next(cartValue);
  }
}
