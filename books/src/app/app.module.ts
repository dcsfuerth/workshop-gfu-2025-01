import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookFilterPipe } from './books/book-filter.pipe';
import { BookListComponent } from './books/book-list/book-list.component';
import { CalculatorComponentComponent } from './shared/calculator-component/calculator-component.component';
import { RatingComponent } from './shared/rating/rating.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './books/welcome/welcome.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    CalculatorComponentComponent,
    BookFilterPipe,
    RatingComponent,
    WelcomeComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
