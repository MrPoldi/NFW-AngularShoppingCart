import { Component, OnInit } from '@angular/core';
import { Dish } from '../models/dish.model';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  dishes: Array<Dish>;
  selectedDish: Dish;

  constructor(private cartService: ShoppingCartService) { }
  getDishes(): void{
    this.cartService.getDishes().subscribe((data: any) => {
      // console.log(data);
      this.dishes = data;
    });
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


