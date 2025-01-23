import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookFilterPipe } from './books/book-filter.pipe';
import { BookListComponent } from './books/book-list/book-list.component';
import { TestPipe } from './books/test.pipe';
import { WelcomeComponent } from './books/welcome/welcome.component';
import { CalculatorComponentComponent } from './shared/calculator-component/calculator-component.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { RatingComponent } from './shared/rating/rating.component';
import { RxJsSpielwieseComponent } from './shared/rx-js-spielwiese/rx-js-spielwiese.component';
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    CalculatorComponentComponent,
    BookFilterPipe,
    RatingComponent,
    WelcomeComponent,
    BookDetailComponent,
    NotFoundComponent,
    TestPipe,
    RxJsSpielwieseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
