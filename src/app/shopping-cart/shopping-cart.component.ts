import {  Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Dish } from '../models/dish.model';
import { ShoppingCart } from '../models/ShoppingCart.model';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

  cart: ShoppingCart = new ShoppingCart();
  cartSub: Subscription;

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.cartSub = this.cartService.getCart().subscribe((data: ShoppingCart) => {
      this.cart = data;
    });
  }

  ngOnDestroy(): void{
    this.cartSub.unsubscribe();
  }

  onClick(dish: Dish): void {
    this.cartService.removeDish(dish);
  }

}
