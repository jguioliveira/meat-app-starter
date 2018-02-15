import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/option/radio-option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  options: RadioOption[] = [
    { label: "Dinheiro", value: "MON" },
    { label: "Cartão de Débito", value: "DEB" },
    { label: "Cartão Refeição", value: "REF" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
