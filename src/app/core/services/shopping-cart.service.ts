import { Injectable } from "@angular/core";

import { CartItem } from "../../restaurant-detail/shopping-cart/cart-item.model";
import { MenuItem } from "../../restaurant-detail/menu-item/menu-item.model";
import { NotificationService } from "./notification.service";

@Injectable()
export class ShoppingCartService {
    
    constructor(private notificationService: NotificationService) {}

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
        this.notificationService.notify(`Você removeu o item ${item.menuItem.name}!`);
    }

    addItem(item: MenuItem) {
        let foundItem = this.itens.find((fItem) => fItem.menuItem === item);
        if (foundItem) {
            this.increaseQty(foundItem);
        }
        else {
            this.itens.push(new CartItem(item));
        }

        this.notificationService.notify(`Você adicionou o item ${item.name}!`);
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