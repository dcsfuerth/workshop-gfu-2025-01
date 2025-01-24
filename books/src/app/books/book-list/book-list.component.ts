import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Book } from '../book';
import { BookDataService } from '../book-data.service';
import { Observable, of } from 'rxjs';

@Component({
  standalone: false,
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent implements OnInit, OnChanges, OnDestroy {
  bildBreite = 50;

  filterText = '';

  coverIsVisible = true;

  books: Book[] = [];

  // books2: Observable<Book[]> = of([]);

  seitenIndex = 0;
  seitenLaenge = 2;

  constructor(private bookDataService: BookDataService) {
    console.log('BookListComponent.constructor');
  }

  async ngOnInit() {
    const ergebnis = await this.bookDataService.getBooks();
    this.books = ergebnis;
    console.log('books3', this.books.length);

    // this.books2 = this.bookDataService.getBooksAsObservable();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
  }

  ngOnDestroy() {
    console.log('BookListComponent.ngOnDestroy');
  }

  trackByBook(index: number, book: any) {
    return book.isbn;
  }

  toggleCover() {
    this.coverIsVisible = !this.coverIsVisible;
  }

  async upvote(isbn: string) {
    console.log('BookListComponent.upvote', { isbn });

    // debugger;

    const book = this.books.find((b) => b.isbn === isbn);
    if (book) {
      book.rating = Math.min(5, book.rating + 0.1);
      await this.bookDataService.updateBook(book);
    }
  }
  async downvote(isbn: string) {
    console.log('BookListComponent.downvote', { isbn });
    const book = this.books.find((b) => b.isbn === isbn);
    if (book) {
      book.rating = Math.max(1, book.rating - 0.1);
      await this.bookDataService.updateBook(book);
    }
  }

  naechsteSeite() {
    this.seitenIndex++;
  }
  vorherigeSeite() {
    this.seitenIndex--;

    if (this.seitenIndex < 0) {
      this.seitenIndex = 0;
    }
  }
}
