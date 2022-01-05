import { Signup } from './../../models/signup';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  template: `
    <form [formGroup]="signupForm" (ngSubmit)="signUp()" novalidate>
      <h1 class="text-center">Signup</h1>
      <div class="mb-3">
        <label for="firstName" class="form-label">First Name*</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          name="firstName"
          formControlName="firstName"
          placeholder="Enter your first name"
        />
      </div>
      <div
        *ngIf="!firstName?.valid && (firstName?.dirty || firstName?.touched)"
        class="alert alert-danger"
      >
        <div [hidden]="!firstName?.errors?.['required']">
          First name is required
        </div>
        <div [hidden]="!firstName?.errors?.['pattern']">
          Only characters are allowed
        </div>
      </div>
      <div class="mb-3">
        <label for="lastName" class="form-label">Last Name*</label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          name="lastName"
          formControlName="lastName"
          placeholder="Enter your last name"
        />
      </div>
      <div
        *ngIf="!lastName?.valid && (lastName?.dirty || lastName?.touched)"
        class="alert alert-danger"
      >
        <div [hidden]="!lastName?.errors?.['required']">
          Last name is required
        </div>
        <div [hidden]="!lastName?.errors?.['pattern']">
          Only characters are allowed
        </div>
      </div>
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
      <button
        type="submit"
        [disabled]="signupForm.invalid"
        class="btn btn-success w-100 btn-lg"
      >
        <!--  -->
        Signup
      </button>
    </form>
  `,
  styles: [],
})
export class SignupComponent implements OnInit {
  users: Signup[];
  localUser: string | null;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.localUser = localStorage.getItem('users');
    if (this.localUser === null) {
      this.users = [];
    }
    this.users = JSON.parse(this.localUser || '[]');
  }
  signupForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.minLength(5),
        // Validators.pattern(
        //   // '/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/',
        //   '/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/'
        // ),
      ],
    ],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  get firstName() {
    return this.signupForm.get('firstName');
  }
  get lastName() {
    return this.signupForm.get('lastName');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }

  ngOnInit(): void {}

  signUp() {
    if (
      this.firstName?.value !== '' &&
      this.lastName?.value !== '' &&
      this.email?.value !== '' &&
      this.password?.value !== ''
    ) {
      if (this.users.find((user) => user.email === this.email?.value)) {
        alert('User with this email id already exist!');
      } else {
        const user = {
          id: uuidv4(),
          firstName: this.firstName?.value,
          lastName: this.lastName?.value,
          email: this.email?.value,
          password: this.password?.value,
        };
        this.users.push(user);
        localStorage.setItem('users', JSON.stringify(this.users));
        alert('Signup Successfully');
        this.signupForm.reset();
        this.router.navigate(['/signin']);
      }
    } else {
      alert('Please fill all fields all are required!');
    }

    // console.log(
    //   this.users,
    //   'users',
    //   this.users.find((user) => user.email === this.email?.value)
    // );
    // console.log(this.signupForm.value);
  }
}
