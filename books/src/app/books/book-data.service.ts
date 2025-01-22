import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
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

  getBookAsObservable(isbn: string): Observable<Book> {
    return this.http.get<Book>(`http://localhost:3000/books/${isbn}`);
  }

  getBookAsPromise(isbn: string): Promise<Book> {
    return firstValueFrom(this.getBookAsObservable(isbn));
  }

  async getBook(isbn: string): Promise<Book | null> {
    return await this.getBookAsPromise(isbn);
  }

  updateBook(book: Book): void {
    // todo ...
  }
}
