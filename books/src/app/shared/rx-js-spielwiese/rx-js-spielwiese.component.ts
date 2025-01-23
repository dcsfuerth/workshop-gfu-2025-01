import { Component, OnInit } from '@angular/core';
import { filter, map, of, Subject, timer } from 'rxjs';

@Component({
  standalone: false,
  templateUrl: './rx-js-spielwiese.component.html',
  styleUrl: './rx-js-spielwiese.component.css',
})
export class RxJsSpielwieseComponent implements OnInit {
  obsCent$ = timer(0, 1000);
  obsEuro$ = of(0);

  ngOnInit() {
    this.obsEuro$ = this.obsCent$.pipe(
      filter((cent: number) => cent % 10 === 0),
      map((cent) => (cent + 0.0) / 100)
    );

    this.obsEuro$.subscribe(console.log);

    const mySubject$ = new Subject();
    mySubject$.next('Jemand zuhause?');
    mySubject$.subscribe((e) => console.log('Zuhörer 1', e));
    mySubject$.subscribe((e) => console.log('Zuhörer 2', e));
    mySubject$.next('Hallo');
    mySubject$.next('Welt :-) ');

    this.obsEuro$.subscribe((data) => {
      mySubject$.next(data);
    });
  }
}
