import { Dish } from './dish.model';

export class CartItem {
    public dish: Dish;
    public amount: number;

    constructor(dish: Dish){
        this.dish = dish;
        this.amount = 1;
    }
}
