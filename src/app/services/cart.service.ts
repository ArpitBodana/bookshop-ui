import { Injectable } from '@angular/core';
import { Book, Cart } from '../books/books.types';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  data: any = localStorage.getItem('cart')
  cart: Cart[] = this.data ? JSON.parse(this.data) : [];



  getCart() {
    return this.cart;
  }

  addToCart(book: Book) {

    let exist = this.cart.find((item: Cart) => item._id === book._id)
    if (exist) {
      exist.quantity = exist.quantity + 1
    }
    else {
      this.cart.push({ ...book, quantity: 1 })
    }
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }



  incQty(_id: string) {
    const exist = this.cart.find((item: Cart) => item._id === _id)
    if (exist) {
      exist.quantity = exist.quantity + 1
      localStorage.setItem('cart', JSON.stringify(this.cart))
    }
  }

  decQty(_id: string) {
    const exist = this.cart.find((item: Cart) => item._id === _id)
    if (exist) {
      if (exist.quantity !== 0) {
        exist.quantity = exist.quantity - 1;
        localStorage.setItem('cart', JSON.stringify(this.cart))
      }
    }
  }

  removeCart(_id: string) {
    this.cart = this.cart.filter((item: Cart) => item._id !== _id)
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }


  totalAmount() {
    return this.cart.reduce(
      (a: any, c: any) => a + c.price * c.quantity,
      0
    );
  }

  emptyCart() {
    this.cart = [];
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }
}
