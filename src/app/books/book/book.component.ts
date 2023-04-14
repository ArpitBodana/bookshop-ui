import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Book } from '../books.types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  constructor(private cartService: CartService, private router: Router) { }
  @Input() public book: Book | any;

  addToCart() {
    this.cartService.addToCart(this.book)
    this.router.navigate(["/cart"]);
  }


}
