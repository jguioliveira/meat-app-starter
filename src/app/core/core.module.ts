import { NgModule } from "@angular/core";

import { OrderService } from "./services/order.service";
import { RestaurantsService } from "./services/restaurants.service";
import { ShoppingCartService } from "./services/shopping-cart.service";

@NgModule({
    providers:[
        OrderService,
        RestaurantsService,
        ShoppingCartService
    ]
})
export class CoreModule { }