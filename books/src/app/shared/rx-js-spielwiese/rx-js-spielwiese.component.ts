import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  filter,
  map,
  of,
  ReplaySubject,
  Subject,
  Subscription,
  takeUntil,
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
  mySubscriptions: Subscription[] = [];

  destroy$ = new Subject();

  ngOnInit() {
    this.obsEuro$ = this.obsCent$.pipe(
      filter((cent: number) => cent % 10 === 0),
      map((cent) => (cent + 0.0) / 100),
      takeUntil(this.destroy$)
    );

    this.mySubscriptions.push(this.obsEuro$.subscribe(console.log));

    const mySubject$ = new ReplaySubject(10);
    mySubject$.next('Hallo');
    mySubject$.subscribe((e) => console.log('Zuhörer 1', e));
    mySubject$.subscribe((e) => console.log('Zuhörer 2', e));
    mySubject$.next('Welt :-) ');

    this.mySubscriptions.push(
      this.obsEuro$.subscribe((data) => {
        mySubject$.next('' + data);
      })
    );
  }

  ngOnDestroy(): void {
    // this.mySubscriptions.forEach((sub) => sub?.unsubscribe());

    this.destroy$.next('bumm');
  }
}
