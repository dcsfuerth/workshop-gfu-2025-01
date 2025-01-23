import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../book-data.service';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { concatMap, map, mergeAll, mergeMap, Observable, of } from 'rxjs';

@Component({
  standalone: false,
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css',
})
export class BookDetailComponent implements OnInit {
  bookObservable: Observable<Book | null> = of(null);

  constructor(
    private bookDataService: BookDataService,
    private route: ActivatedRoute
  ) {
    //
  }

  async ngOnInit() {
    // this.bookObservable = this.route.params.pipe(
    //   mergeMap((params) =>
    //     this.bookDataService.getBookAsObservable(params['isbn'])
    //   )
    // );

    this.bookObservable = this.route.params.pipe(
      concatMap((params) =>
        this.bookDataService.getBookAsObservable(params['isbn'])
      )
    );
  }
}
