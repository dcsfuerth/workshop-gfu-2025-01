import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { FormsModule } from "@angular/forms";
import { CalculatorComponentComponent } from './shared/calculator-component/calculator-component.component';
import { BookFilterPipe } from './books/book-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    CalculatorComponentComponent,
    BookFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
