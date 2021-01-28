import { CartItem } from './cart-item.model';

export class ShoppingCart {
    public items: Array<CartItem> = new Array<CartItem>();
    public priceTotal = 0;
    public itemsTotal = 0;

    public addItem(newItem: CartItem): void{
        const item = this.items.find((i) => i.dish.id === newItem.dish.id);
        if (item === undefined){
            this.items.push(newItem);
        }
        else{
            item.amount++;
        }
        this.priceTotal += newItem.dish.price;
        this.itemsTotal++;
    }

    public removeItem(oldItem: CartItem): void{
        const item = this.items.find((i) => i.dish.id === oldItem.dish.id);
        if (item.amount === 1){
            this.items = this.items.filter(i => i !== item);
            console.log(this.items);
        }
        else{
            item.amount--;
        }
    }

}

