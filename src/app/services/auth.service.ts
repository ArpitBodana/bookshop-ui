import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated: boolean = localStorage.getItem('token') ? true : false;

  requestAuth(token: string) {
    localStorage.setItem('token', token);
    this.isAuthenticated = true;
  }

  getToken() {
    return localStorage.getItem('token')
  }

  isAuth() {
    return this.isAuthenticated
  }

  makeLogout() {
    this.isAuthenticated = false;
    localStorage.removeItem("token");
  }

  

}
