import { NgModule, ModuleWithProviders } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { OrderService } from "../core/services/order.service";
import { RestaurantsService } from "../core/services/restaurants.service";
import { ShoppingCartService } from "../core/services/shopping-cart.service";
import { NotificationService } from "../core/services/notification.service";

import { OptionComponent } from "./option/option.component";
import { RatingComponent } from "./rating/rating.component";
import { InputContainerComponent } from "./input-container/input-container.component";
import { SnackbarComponent } from './messages/snackbar/snackbar.component';

@NgModule({
    declarations: [
        OptionComponent,
        RatingComponent,
        InputContainerComponent,
        SnackbarComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule, //Exportamos esses módulos, evita ter de importá-los nos outros módulos

        OptionComponent,
        RatingComponent,
        InputContainerComponent,
        SnackbarComponent
    ]
})
export class SharedModule { 
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers:[
                OrderService,
                RestaurantsService,
                ShoppingCartService,
                NotificationService
            ]
        }
    }
}