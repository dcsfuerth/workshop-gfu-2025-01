import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable, ReplaySubject } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class BookDataService {
  public bestellungen: ReplaySubject<Book> = new ReplaySubject<Book>(100);

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
      `${environment.SERVER_URL}/${book.isbn}`,
      {
        rating: book.rating,
      }
    );

    const promise$ = firstValueFrom(observable$);

    return await promise$;
  }

  // --- interne Hilfsmethoden

  getBooksAsObservable(): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.SERVER_URL}`);
  }

  private getBooksAsPromise(): Promise<Book[]> {
    return firstValueFrom(this.getBooksAsObservable());
  }

  getBookAsObservable(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${environment.SERVER_URL}/${isbn}`);
  }

  private getBookAsPromise(isbn: string): Promise<Book> {
    return firstValueFrom(this.getBookAsObservable(isbn));
  }
}
