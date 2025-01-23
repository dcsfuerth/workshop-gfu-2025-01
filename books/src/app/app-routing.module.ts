import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './books/welcome/welcome.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { bookGuard } from './books/book.guard';
import { bookExitGuard } from './books/book-exit.guard';
import { RxJsSpielwieseComponent } from './shared/rx-js-spielwiese/rx-js-spielwiese.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'books', component: BookListComponent },
  {
    path: 'books/:isbn',
    component: BookDetailComponent,
    canActivate: [bookGuard],
    canDeactivate: [bookExitGuard],
  },
  { path: 'rx-js-spielwiese', component: RxJsSpielwieseComponent },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false, useHash: false }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// /      => /app/http/index.html
// /books => /app/http/books/index.html => 404!

// http://mein-server.de/books
// => 172.16.1.100:4200/books/index.html + default.html + start.html
