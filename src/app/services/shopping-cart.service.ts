import { Injectable } from '@angular/core';
import {DISHES} from '../mock-dishes';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() { }
  selectedDish;

  getDishes(): object{
    return DISHES;
  }

  selectDish(dish): void{
    this.selectedDish = dish;
  }
}
