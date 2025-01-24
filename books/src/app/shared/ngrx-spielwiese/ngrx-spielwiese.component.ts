import { Component } from '@angular/core';
import { createAction } from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';
import { Observable, of } from 'rxjs';

export const initialState = 0;
export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

@Component({
  standalone: false,

  templateUrl: './ngrx-spielwiese.component.html',
  styleUrl: './ngrx-spielwiese.component.css',
})
export class NgrxSpielwieseComponent {
  count$: Observable<number> = of(0);

  constructor() {
    // this.count$ = store.select('count');
  }

  increment() {
    //
  }
  decrement() {
    //
  }
  reset() {
    //
  }
}
