import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Dish } from '../models/dish.model';
import { ShoppingCart } from '../models/ShoppingCart.model';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit, OnDestroy {

  dishes: Array<Dish>;
  selectedDish: Dish;

  cart: ShoppingCart;
  dishSub: Subscription;

  constructor(private cartService: ShoppingCartService) { }

  getDishes(): void{
    this.cartService.getDishes().subscribe((data: any) => {
      this.dishes = data;
    });
  }

  getChosenDish(): void{
    this.dishSub = this.cartService.getDish().subscribe((data: Dish) => {
      this.selectedDish = data;
    });
  }

  ngOnInit(): void {
    this.getDishes();
    this.getChosenDish();
  }

  ngOnDestroy(): void{
    this.dishSub.unsubscribe();
  }

  onAddToCart(dish): void {
    this.cartService.setDish(dish);
  }

}


