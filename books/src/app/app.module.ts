import { HttpClientModule } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';
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
import { StoreModule } from '@ngrx/store';
import {
  counterReducer,
  NgrxSpielwieseComponent,
} from './shared/ngrx-spielwiese/ngrx-spielwiese.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
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
    NgrxSpielwieseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ count: counterReducer /**,  books: bookReducer */ }),
    StoreDevtoolsModule.instrument({ maxAge: 100, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
