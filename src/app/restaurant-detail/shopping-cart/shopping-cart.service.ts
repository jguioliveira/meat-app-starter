import { CartItem } from "../../restaurant-detail/shopping-cart/cart-item.model";
import { MenuItem } from "../../restaurant-detail/menu-item/menu-item.model";

export class ShoppingCartService {

    itens: CartItem[] = [];

    clear() {
        this.itens = [];
    }

    total(): number {
        return this.itens
            .map(item => item.value())
            .reduce((prev, value) => prev + value, 0);
    }

    removeItem(item: CartItem) {
        this.itens.splice(this.itens.indexOf(item), 1);
    }

    addItem(item: MenuItem) {
        let foundItem = this.itens.find((fItem) => fItem.menuItem === item);
        if (foundItem) {
            this.increaseQty(foundItem);
        }
        else {
            this.itens.push(new CartItem(item));
        }
    }

    increaseQty(item: CartItem){
        item.quantity = item.quantity + 1;
    }

    decreaseQty(item: CartItem){
        item.quantity = item.quantity - 1;
        if(item.quantity === 0){
            this.removeItem(item);
        }
    }

}