import { Injectable } from '@angular/core';
import { Dish } from '../models/dish.model';
import {HttpClient} from '@angular/common/http';
import { Observable, Subject, Observer } from 'rxjs';
import { ShoppingCart } from '../models/ShoppingCart.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  cartObservable: Observable<ShoppingCart> = new Observable<ShoppingCart>();
  dishSubject: Subject<Dish> = new Subject<Dish>();

  cart: ShoppingCart = new ShoppingCart();

  constructor(private http: HttpClient) {
    this.cartObservable = new Observable<ShoppingCart>((observer: Observer<ShoppingCart>) => {
      observer.next(this.cart);
    });
  }

  setDish(dish: Dish): void{
    this.dishSubject.next(dish);
    this.cart.addItem(new CartItem(dish));
  }

  getDish(): Observable<Dish>{
    return this.dishSubject;
  }

  getDishes(): Observable<Array<Dish>>{
    return this.http.get<Array<Dish>>('https://patient-grass-7793.getsandbox.com:443/dishes');
  }

  getCart(): Observable<ShoppingCart> {
    return this.cartObservable;
  }

  removeDish(dish: Dish): void{
    this.cart.removeItem(new CartItem(dish));
  }
}
