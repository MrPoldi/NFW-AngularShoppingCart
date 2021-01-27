import { Component, OnInit } from '@angular/core';
import { Dish } from '../models/dish.model';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  varTest = 'zxcvbnm';

  selectedDishes: Array<Dish>;

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.getSelectedDishes();
  }

  getSelectedDishes(): void{
    this.selectedDishes = this.cartService.getSelectedDishes();
  }

}
