import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';

@Pipe({
  name: 'bookFilter',
  standalone: false
})
export class BookFilterPipe implements PipeTransform {

  transform(books: Book[] = [], filterText : string = ''): Book[] {

    if (!filterText || books.length === 0) {
      return books;
    }

    const searchText = filterText.toLowerCase();
    const result = books.filter((book) => (book.title || '').toLowerCase().includes(searchText));
    return result;
  }

}
