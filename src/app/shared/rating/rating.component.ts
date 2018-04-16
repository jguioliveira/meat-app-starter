import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  rates: number[] = [1,2,3,4,5];
  rate: number = 0;
  previousRate: number;

  @Output() routed = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  setRate(r: number){
    this.rate = r;
    this.previousRate = undefined;
    this.routed.emit(this.rate);
  }

  setTemporaryRate(r: number){
    if(this.previousRate === undefined){
      this.previousRate = this.rate;
    }

    this.rate = r;
  }

  clearTemporaryRate(r: number){
    if(this.previousRate !== undefined){
      this.rate = this.previousRate;  
      this.previousRate = undefined;
    }
  }

}
