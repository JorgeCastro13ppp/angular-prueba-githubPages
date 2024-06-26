import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  //  template: '<h1>Hola CounterComponent</h1>',
  template: `
  <h3>Contador: {{counter}}</h3>
  <button (click)="increaseBy(counter)">+ 1</button>
  <button (click)="resetCounter(counter)">Reset</button>
  <button (click)="decreaseBy(counter)">- 1</button>
  `
})

export class CounterComponent {

  public counter:number = 10;

  increaseBy(value:number):void{
    this.counter+=1;
  }
  decreaseBy(value:number):void{
    this.counter-=1;
  }
  resetCounter(value:number):void{
    this.counter=10;
  }
}

