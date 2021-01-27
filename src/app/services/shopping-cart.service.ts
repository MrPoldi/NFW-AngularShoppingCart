import { Injectable } from '@angular/core';
import {DISHES} from '../mock-dishes';
import { Dish } from '../models/dish.model';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient) { }

  selectedDish: Dish;
  selectedDishes: Array<Dish> = new Array<Dish>();

  getDishes(): Observable<Array<Dish>>{
    return this.http.get<Array<Dish>>('https://dawn-butterfly-2826.getsandbox.com:443/dishes');
  }

  selectDish(dish: Dish): void{
    this.selectedDish = dish;
    this.selectedDishes.push(dish);
  }

  getSelectedDish(): Dish{
    return this.selectedDish;
  }

  getSelectedDishes(): Array<Dish>{
    return this.selectedDishes;
  }
}
