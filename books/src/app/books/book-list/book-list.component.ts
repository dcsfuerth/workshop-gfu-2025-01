import { Component } from '@angular/core';

@Component({
  selector: 'books-list',
  standalone: false,
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  public books =  [
    {isbn: '1234567890', title: 'Buch1', price: 10},
    {isbn: '1234567891', title: 'Buch2', price: 20},
    {isbn: '1234567892', title: 'Buch3', price: 30}
  ];



  public autos = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
}
