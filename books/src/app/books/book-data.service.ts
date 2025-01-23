import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookDataService {
  constructor(private http: HttpClient) {
    console.log('BookDataService.constructor');
  }

  async getBooks(): Promise<Book[]> {
    return await this.getBooksAsPromise();
  }

  async getBook(isbn: string): Promise<Book | null> {
    return await this.getBookAsPromise(isbn);
  }

  async updateBook(book: Book): Promise<Book> {
    console.log('BookDataService.updateBook', book);
    // todo ...

    const observable$ = this.http.patch<Book>(
      `http://localhost:3000/books/${book.isbn}`,
      {
        rating: book.rating,
      }
    );

    const promise$ = firstValueFrom(observable$);

    return await promise$;
  }

  // --- interne Hilfsmethoden

  getBooksAsObservable(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3000/books');
  }

  private getBooksAsPromise(): Promise<Book[]> {
    return firstValueFrom(this.getBooksAsObservable());
  }

  private getBookAsObservable(isbn: string): Observable<Book> {
    return this.http.get<Book>(`http://localhost:3000/books/${isbn}`);
  }

  private getBookAsPromise(isbn: string): Promise<Book> {
    return firstValueFrom(this.getBookAsObservable(isbn));
  }
}
