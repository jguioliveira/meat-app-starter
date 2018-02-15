import { Injectable } from "@angular/core";
import { Http } from "@angular/http"
import { ShoppingCartService } from "../restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "../restaurant-detail/shopping-cart/cart-item.model";
import { Order } from "../order/order.model";

@Injectable()
export class OrderService{

    constructor(private cartService: ShoppingCartService, private http: Http){}

    cartItens(): CartItem[] {
        return this.cartService.itens;
    }

    itemsValue(): number {
        return this.cartService.total();
    }

    increaseQty(item: CartItem){
        this.cartService.increaseQty(item);
    }

    decreaseQty(item: CartItem){
        this.cartService.decreaseQty(item);
    }

    remove(item: CartItem){
        this.cartService.removeItem(item);
    }

    checkOrder(order: Order) {

    }
}