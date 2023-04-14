import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router, private cartService: CartService) {

  }

  count = 0;
  haveAuth() {
    return this.authService.isAuth();
  }

  handleLogOut() {
    try {
      this.authService.makeLogout();
      this.cartService.emptyCart();
      window.location.reload();
    } catch (error) {
      //console.log(error);
    }

  }
  cartItemsCount() {
    this.count = this.cartService.getCart().length;
    return this.count;
  }

}
