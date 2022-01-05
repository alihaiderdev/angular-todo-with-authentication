import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = localStorage.getItem('user') ? true : false;
  constructor() {}

  checkedLoggedIn() {
    this.isLoggedIn = localStorage.getItem('user') ? true : false;
    return this.isLoggedIn;
  }
}
