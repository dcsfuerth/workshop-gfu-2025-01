import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http: HttpClient) {
    //
  }

  getBooksAsObservable(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3000/books');
  }

  getBooksAsPromise(): Promise<Book[]> {
    return firstValueFrom(this.getBooksAsObservable());
  }

  async getBooks(): Promise<Book[]> {
    return await this.getBooksAsPromise();
  }

  getBooksOld(): Book[] {
    return [
      {isbn: '1234567890', title: 'Angular 17', price: 10, coverUrl:'https://m.media-amazon.com/images/I/71Wv+d6oP6L._AC_UY218_.jpg', rating: 4.2},
      {isbn: '1234567891', title: 'React 18', price: 20, coverUrl:'https://m.media-amazon.com/images/I/71wlgd2ShsL._AC_UY218_.jpg', rating: 3.5},
      {isbn: '1234567892', title: 'Angular 19', price: 30, coverUrl:'https://m.media-amazon.com/images/I/61l7nyf3OmL._AC_UY218_.jpg', rating: 4.9},
    ];
  }

  // getBook(isbn: string): Book | null {
  //   return this.getBooks().find(b => b.isbn === isbn) || null;
  // }

  updateBook(book: Book): void {
    // todo ...
  }
}
