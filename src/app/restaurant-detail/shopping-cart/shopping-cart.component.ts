import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item.model';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';
import { ShoppingCartService } from '../../core/services/shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): CartItem[] {
    return this.shoppingCartService.itens;
  }

  total(): number {
    return this.shoppingCartService.total();
  }

  addItem(item: MenuItem){
    this.shoppingCartService.addItem(item);
  }

  removeItem(item: CartItem){
    this.shoppingCartService.removeItem(item);
  }

  clear(){
    this.shoppingCartService.clear();
  }

}
