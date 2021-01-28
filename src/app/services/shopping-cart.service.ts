import { Injectable } from '@angular/core';
import {DISHES} from '../mock-dishes';
import { Dish } from '../models/dish.model';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../models/ShoppingCart.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient) { }

  selectedDish: Dish;
  selectedDishes: Array<Dish> = new Array<Dish>();
  cart: ShoppingCart = new ShoppingCart();

  getDishes(): Observable<Array<Dish>>{
    return this.http.get<Array<Dish>>('https://patient-grass-7793.getsandbox.com:443/dishes');
  }

  selectDish(dish: Dish): void{
    this.selectedDish = dish;
    this.selectedDishes.push(dish);
    // const cartItem = new CartItem(dish);
    this.cart.addItem(new CartItem(dish));
  }

  removeDish(dish: Dish): void{
    this.cart.removeItem(new CartItem(dish));
  }

  getSelectedDish(): Dish{
    return this.selectedDish;
  }

  getShoppingCart(): ShoppingCart{
    return this.cart;
  }

  getSelectedDishes(): Array<Dish>{
    return this.selectedDishes;
  }
}
