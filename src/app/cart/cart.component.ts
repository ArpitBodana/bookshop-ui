import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Apollo } from 'apollo-angular';
import { addOrder } from '../graphql/order.qureies';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private cartService: CartService, private router: Router, private authService: AuthService, private apollo: Apollo) { }


  noItems() {
    return this.cartService.getCart().length > 0 ? true : false;
  }

  getCart() {
    return this.cartService.getCart();
  }

  getTotalPrice() {
    return this.cartService.totalAmount();
  }

  increase(_id: string) {
    this.cartService.incQty(_id)
  }
  decrease(_id: string) {
    this.cartService.decQty(_id)
  }

  removeItem(_id: string) {
    this.cartService.removeCart(_id)
  }

  haveAuth() {
    return this.authService.isAuth();
  }

  placeOrder() {
    if (!this.haveAuth()) {
      this.router.navigate(["/login"]);
    }
    else {
      console.log(this.getCart())
      this.apollo.mutate({
        mutation: addOrder,
        variables: {
          "order": {
            "items": this.getCart(),
            "totalPrice": this.getTotalPrice() + 103.64 + 20.23 + 80.94
          }
        },
      }).subscribe((result: any) => {
        this.cartService.emptyCart();
        alert("Order Placed Successfully")
      },
        (error: any) => { console.log(error) }
      )

    }
  }
}
