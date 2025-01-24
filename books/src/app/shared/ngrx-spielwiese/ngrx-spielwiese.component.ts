import { Component } from '@angular/core';
import { createAction, Store } from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';
import { Observable, of } from 'rxjs';

export const initialState = 0;
export const incrementCreator = createAction('[Counter] Increment');
export const decrementCreator = createAction('[Counter] Decrement');
export const resetCreator = createAction('[Counter] Reset');

export const counterReducer = createReducer(
  initialState,
  on(incrementCreator, (state) => state + 1),
  on(decrementCreator, (state) => state - 1),
  on(resetCreator, (state) => 0)
);

@Component({
  standalone: false,
  templateUrl: './ngrx-spielwiese.component.html',
  styleUrl: './ngrx-spielwiese.component.css',
})
export class NgrxSpielwieseComponent {
  count$: Observable<number> = of(0);

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  increment() {
    const actionIncrement = incrementCreator();
    this.store.dispatch(actionIncrement);
  }
  decrement() {
    this.store.dispatch(decrementCreator());
    //
  }
  reset() {
    this.store.dispatch(resetCreator());
  }
}
