import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { getAllBooks } from '../graphql/books.qureies';
import { Book } from './books.types';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private apollo: Apollo) {

  }

  books: Book[] = [];
  loading: boolean = true;
  error: string = "";

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: getAllBooks
    }).valueChanges.subscribe((result: any) => {
      this.books = result?.data?.getAllBooks
      this.loading = result?.loading
      this.error = result?.error
    })

  }


}
