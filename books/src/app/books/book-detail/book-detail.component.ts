import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../book-data.service';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: false,
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css',
})
export class BookDetailComponent implements OnInit {
  book: Book | null = null;
  isbn: string = '';

  constructor(
    private bookDataService: BookDataService,
    private route: ActivatedRoute
  ) {
    //
  }

  async ngOnInit() {
    this.isbn = this.route.snapshot.params['isbn'];
    this.book = await this.bookDataService.getBook(this.isbn);
  }
}
