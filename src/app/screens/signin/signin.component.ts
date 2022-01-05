import { Router } from '@angular/router';
import { Signin } from './../../models/signin';
import { Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  template: `
    <form [formGroup]="signinForm" (ngSubmit)="signIn()" novalidate>
      <h1 class="text-center">Signin</h1>
      <div class="mb-3">
        <label for="email" class="form-label">Email*</label>
        <input
          type="email"
          class="form-control"
          id="email"
          name="email"
          formControlName="email"
          placeholder="Enter your email"
        />
      </div>
      <div
        *ngIf="!email?.valid && (email?.dirty || email?.touched)"
        class="alert alert-danger"
      >
        <div [hidden]="!email?.errors?.['required']">Email is required</div>
        <div [hidden]="!email?.errors?.['minlength']">
          Min length allowed is 5
        </div>
        <!-- [hidden]="!email?.errors?.['pattern'] || !email?.errors?.['email']" -->
        <div [hidden]="!email?.errors?.['email']">Invalid email address</div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password*</label>
        <input
          type="password"
          class="form-control"
          id="password"
          name="password"
          formControlName="password"
          placeholder="Enter your password"
        />
      </div>
      <div
        *ngIf="!password?.valid && (password?.dirty || password?.touched)"
        class="alert alert-danger"
      >
        <div [hidden]="!password?.errors?.['required']">
          Password is required
        </div>
        <div [hidden]="!password?.errors?.['minlength']">
          Min length allowed is 8
        </div>
      </div>
      <button type="submit" class="btn btn-success w-100 btn-lg">Signin</button>
    </form>
  `,
  styles: [],
})
export class SigninComponent implements OnInit {
  users: Signin[];
  localUser: string | null;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.localUser = localStorage.getItem('users') || '[]';
    if (this.localUser === null) {
      this.users = [];
    }
    this.users = JSON.parse(this.localUser);
  }
  signinForm = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  get email() {
    return this.signinForm.get('email');
  }
  get password() {
    return this.signinForm.get('password');
  }

  ngOnInit(): void {}

  signIn() {
    if (this.email?.value !== '' && this.password?.value !== '') {
      if (
        this.users.find((user) => user.email === this.email?.value) ===
        undefined
      ) {
        alert('Email address is Incorrect!');
      } else {
        if (
          this.users.find(
            (user) =>
              user.email === this.email?.value &&
              user.password === this.password?.value
          ) === undefined
        ) {
          alert('Password is Incorrect!');
        }
        console.log(
          this.users.find(
            (user) =>
              user.email === this.email?.value &&
              user.password === this.password?.value
          ),
          'user'
        );
        localStorage.setItem(
          'user',
          JSON.stringify(
            this.users.find(
              (user) =>
                user.email === this.email?.value &&
                user.password === this.password?.value
            )
          )
        );
        alert('Signin Successfully');
        this.signinForm.reset();
        this.router.navigate(['/add-todo']);
      }
    } else {
      alert('Please fill all fields all are required!');
    }

    // console.log(
    //   'users',
    //   this.users.find(
    //     (user) =>
    //       user.email === this.email?.value &&
    //       user.password === this.password?.value
    //   ),
    //   this.password?.value
    // );
  }
}
