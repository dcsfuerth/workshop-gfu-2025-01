import { Component, Input } from '@angular/core';

@Component(
  {
    selector: 'books-root',
    templateUrl: './app.component.html',
    standalone: false,
    styleUrl: './app.component.css'
  }
)
export class AppComponent {

  public title: string  = 'books!';
}

// fakultaet(42,'dfdfd', null, null, null ..... , .. ,true)
