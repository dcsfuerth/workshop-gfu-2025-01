import { Component } from '@angular/core';
import { createAction, props, Store } from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';
import { Observable, of } from 'rxjs';

export const initialState: number = 0; // {book: Book[], customers: Customer[]}
export const incrementCreator = createAction('[Counter] Increment');
export const decrementCreator = createAction('[Counter] Decrement');
export const resetCreator = createAction('[Counter] Reset');
export const setCounterCreator = createAction(
  '[Counter] Set',
  props<{ count: number }>()
);

export const counterReducer = createReducer(
  initialState,
  on(incrementCreator, (state) => state + 1),
  on(decrementCreator, (state) => state - 1),
  on(resetCreator, (state) => 0),
  on(setCounterCreator, (state, action) => action.count)
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
    this.store.dispatch(incrementCreator());
  }
  decrement() {
    this.store.dispatch(decrementCreator());
    //
  }
  reset() {
    this.store.dispatch(resetCreator());
  }
  setze42() {
    this.store.dispatch(setCounterCreator({ count: 42 }));
  }
}
