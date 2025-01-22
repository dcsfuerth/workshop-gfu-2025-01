import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'books-list',
  standalone: false,
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit, OnChanges , OnDestroy {

  bildBreite = 50;

  filterText = '';

  coverIsVisible = true;

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
    // ....
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  public books: Book[] =  [
    {isbn: '1234567890', title: 'Angular 16', price: 10, coverUrl:'https://m.media-amazon.com/images/I/71Wv+d6oP6L._AC_UY218_.jpg', rating: 4.2},
    {isbn: '1234567891', title: 'React 18', price: 20, coverUrl:'https://m.media-amazon.com/images/I/71wlgd2ShsL._AC_UY218_.jpg', rating: 3.5},
    {isbn: '1234567892', title: 'Angular 19', price: 30, coverUrl:'https://m.media-amazon.com/images/I/61l7nyf3OmL._AC_UY218_.jpg', rating: 4.9},
    ];

  trackByBook(index: number, book: any) {
    return book.isbn;
  }

  toggleCover() {
    this.coverIsVisible = !this.coverIsVisible;
  }
  public autos = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  upvote(isbn: string) {
    console.log('BookListComponent.upvote', {isbn});

    const book = this.books.find(b => b.isbn === isbn);
    if (book) {
      book.rating = Math.min(5, book.rating + 0.1);
    }
  }
  downvote(isbn: string) {
    console.log('BookListComponent.downvote', {isbn});
    const book = this.books.find(b => b.isbn === isbn);
    if (book) {
      book.rating = Math.max(1, book.rating - 0.1);
    }
  }


}
