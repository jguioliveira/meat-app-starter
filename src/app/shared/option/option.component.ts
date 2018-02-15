import { Component, OnInit, Input } from '@angular/core';
import { RadioOption } from './radio-option.model';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'mt-option',
  templateUrl: './option.component.html'
})
export class OptionComponent implements OnInit {

  @Input() options: RadioOption[];
  value: any;

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any) {
    this.value = value;
  }
}