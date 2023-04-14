import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Apollo } from 'apollo-angular';
import { loginQuery } from '../graphql/auth.qureies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private apollo: Apollo, private router: Router,) { }

  email: string = "";
  password: string = "";

  loading: boolean = false;
  error: string = "";

  handleLogin() {
    event?.preventDefault();
    this.loading = true;
    if (this.email == "" || this.password == "") {
      this.loading = false;
      this.error = "Please provide the credentials!"
    }
    else {
      this.apollo.mutate({
        mutation: loginQuery,
        variables: {
          "user": {
            "email": this.email,
            "password": this.password
          }
        }
      }).subscribe((result: any) => {
        this.authService.requestAuth(result?.data?.logIn.token)
        this.loading = false;
        this.router.navigate(["/"])
      }, (error: any) => {
        this.loading = false;
        this.error = error.message
      }
      )
    }
  }


}
