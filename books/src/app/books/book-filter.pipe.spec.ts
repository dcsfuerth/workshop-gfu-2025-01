import { BookFilterPipe } from './book-filter.pipe';

const book = {
  title: 'React 18',
  isbn: '1234567891',
  price: 100,
  coverUrl: 'http://localhost:4200/cover.jpg',
  rating: 5,
};

const booklist = [book];

// -----------------------------------------------------------------

describe('BookFilterPipe', () => {
  let pipe: any;

  beforeEach(() => {
    pipe = new BookFilterPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should work with an empty book liste', () => {
    const result = pipe.transform([], 'bla');
    expect(result).toEqual([]);
  });

  it('should find with an single book using the title', () => {
    const result = pipe.transform(booklist, 'react');
    expect(result).toEqual([book]);
  });

  it('should find with an single book using the isbn', () => {
    const result = pipe.transform([book], '1234567891');
    expect(result).toEqual([book]);
  });

  it('should ignore books with the wrong title', () => {
    const result = pipe.transform([book], 'VueJS');
    expect(result.length).toBe(0);
  });

  it('should work books with empty filtervalues', () => {
    const result = pipe.transform([book], '');
    expect(result).toEqual([book]);
  });

  it('should work with a null as filtervalue', () => {
    const result = pipe.transform([book], null);
    expect(result).toEqual([book]);
  });

  it('should work with null as book list', () => {
    const result = pipe.transform(null, '');
    expect(result.length).toBe(0);
  });
});
