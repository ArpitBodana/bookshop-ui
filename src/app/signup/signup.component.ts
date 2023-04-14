import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { passwordValidator } from '../utils/passwordValidator';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Apollo } from 'apollo-angular';
import { signUpQuery } from '../graphql/auth.qureies';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService, private apollo: Apollo, private router: Router) { }

  mainForm: any;
  ngOnInit(): void {
    this.mainForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: passwordValidator })
  }

  loading: boolean = false;
  error: string = "";

  get email() {
    return this.mainForm.get('email');
  }
  get name() {
    return this.mainForm.get('name');
  }
  get password() {
    return this.mainForm.get('password');
  }
  get confrimPassword() {
    return this.mainForm.get('confirmPassword');
  }

  handleSignUp() {
    event?.preventDefault();
    this.loading = true
    this.apollo.mutate({
      mutation: signUpQuery,
      variables: {
        "user": {
          "name": this.name.value,
          "email": this.email.value,
          "password": this.password.value
        }
      }
    }).subscribe((result: any) => {
      this.authService.requestAuth(result?.data?.user.token)
      this.loading = false;
      this.router.navigate(["/"])
    }, (error: any) => {
      this.loading = false;
      this.error = error.message
    })


  }
}
