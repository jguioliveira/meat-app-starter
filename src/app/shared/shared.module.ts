import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { OptionComponent } from "./option/option.component";
import { RatingComponent } from "./rating/rating.component";
import { InputContainerComponent } from "./input-container/input-container.component";

@NgModule({
    declarations: [
        OptionComponent,
        RatingComponent,
        InputContainerComponent
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
        InputContainerComponent
    ]
})
export class SharedModule { }