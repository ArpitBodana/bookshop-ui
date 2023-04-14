import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books.component';
import { LoadingComponent } from "./loading/loading.component"







@NgModule({
  declarations: [
    BookComponent,
    BooksComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [BooksComponent, LoadingComponent]
})
export class BooksModule { }
