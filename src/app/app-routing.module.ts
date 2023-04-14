import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './guards/auth.guard';
import { RouteGuardGuard } from './guards/route-guard.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent, canActivate: [RouteGuardGuard] },
  { path: "signup", component: SignupComponent, canActivate: [RouteGuardGuard] },
  { path: "cart", component: CartComponent },
  { path: "orders", component: OrdersComponent, canActivate: [AuthGuard] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [HomeComponent, LoginComponent, CartComponent, SignupComponent, OrdersComponent]


