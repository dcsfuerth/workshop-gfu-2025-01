import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { Book } from '../book';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'books-list',
  standalone: false,
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent implements OnInit, OnChanges, OnDestroy {
  bildBreite = 50;

  filterText = '';

  coverIsVisible = true;

  books: Book[] = [];

  constructor(private bookDataService: BookDataService) {
    console.log('constructor');
  }

  async ngOnInit() {
    // console.log('ngOnInit');
    // this.bookDataService.getBooksAsObservable().subscribe((books) => {
    //   this.books = books;
    //   console.log('books1', this.books.length);
    // });

    // console.log('books2', this.books.length);

    // this.bookDataService.getBooksAsPromise().then((books) => this.books = books);

    const ergebnis = await this.bookDataService.getBooks();
    this.books = ergebnis;
    console.log('books3', this.books.length);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  trackByBook(index: number, book: any) {
    return book.isbn;
  }

  toggleCover() {
    this.coverIsVisible = !this.coverIsVisible;
  }
  public autos = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  upvote(isbn: string) {
    console.log('BookListComponent.upvote', { isbn });

    const book = this.books.find((b) => b.isbn === isbn);
    if (book) {
      book.rating = Math.min(5, book.rating + 0.1);
      this.bookDataService.updateBook(book);
    }
  }
  downvote(isbn: string) {
    console.log('BookListComponent.downvote', { isbn });
    const book = this.books.find((b) => b.isbn === isbn);
    if (book) {
      book.rating = Math.max(1, book.rating - 0.1);
      this.bookDataService.updateBook(book);
    }
  }
}
