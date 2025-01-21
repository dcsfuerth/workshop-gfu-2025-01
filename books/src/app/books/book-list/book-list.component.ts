import { Component } from '@angular/core';

@Component({
  selector: 'books-list',
  standalone: false,
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  bildBreite = 50;

  coverIsVisible = true;

  public books =  [
    {isbn: '1234567890', title: 'Buch1', price: 10, coverUrl:'https://m.media-amazon.com/images/I/71Wv+d6oP6L._AC_UY218_.jpg'},
    {isbn: '1234567891', title: 'Buch2', price: 20, coverUrl:'https://m.media-amazon.com/images/I/71wlgd2ShsL._AC_UY218_.jpg'},
    {isbn: '1234567892', title: 'Buch3', price: 30, coverUrl:'https://m.media-amazon.com/images/I/61l7nyf3OmL._AC_UY218_.jpg'},
    ];

  trackByBook(index: number, book: any) {
    return book.isbn;
  }


  toggleCover() {
    this.coverIsVisible = !this.coverIsVisible;
  }

  public autos = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
}
