import { Component } from '@angular/core';

@Component({
  selector: 'calculator-component',
  standalone: false,

  templateUrl: './calculator-component.component.html',
  styleUrl: './calculator-component.component.css',
})
export class CalculatorComponentComponent {
  public x = '0';
  public y = '0';
  public result: number = 0;

  public addieren() {
    this.result = +this.x + +this.y;  // parseInt(this.x) + parseInt(this.y)
  }

  public subtrahieren() {
    this.result = +this.x - +this.y;
  }

  public clear() {
    this.x = '0';
    this.y = '0';
    this.result = 0;
  }
}
