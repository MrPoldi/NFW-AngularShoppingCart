import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  dishes;
  selectedDish;

  constructor(private cartService: ShoppingCartService) { }
  getDishes(): void{
    this.dishes = this.cartService.getDishes();
  }

  ngOnInit(): void {
    this.getDishes();
  }

  onClick(dish): void {
    this.cartService.selectDish(dish);
    this.getSelectedDish();
  }

  getSelectedDish(): void{
    this.selectedDish =  this.cartService.selectedDish;
  }

}


