import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  filter,
  map,
  of,
  ReplaySubject,
  Subject,
  Subscription,
  timer,
} from 'rxjs';

@Component({
  standalone: false,
  templateUrl: './rx-js-spielwiese.component.html',
  styleUrl: './rx-js-spielwiese.component.css',
})
export class RxJsSpielwieseComponent implements OnInit, OnDestroy {
  obsCent$ = timer(0, 1000);
  obsEuro$ = of(0);
  mySubscription: Subscription | null = null;
  mySubscription2: Subscription | null = null;

  ngOnInit() {
    this.obsEuro$ = this.obsCent$.pipe(
      filter((cent: number) => cent % 10 === 0),
      map((cent) => (cent + 0.0) / 100)
    );

    this.mySubscription = this.obsEuro$.subscribe(console.log);

    const mySubject$ = new ReplaySubject(10);
    mySubject$.next('Hallo');
    mySubject$.subscribe((e) => console.log('Zuhörer 1', e));
    mySubject$.subscribe((e) => console.log('Zuhörer 2', e));
    mySubject$.next('Welt :-) ');

    this.mySubscription2 = this.obsEuro$.subscribe((data) => {
      mySubject$.next('' + data);
    });
  }

  ngOnDestroy(): void {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }

    this.mySubscription2?.unsubscribe();
  }
}
