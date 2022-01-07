import { Signin } from './../models/signin';
// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Subject } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   isLoggedIn: boolean = localStorage.getItem('user') ? true : false;

//   headerChange$ = new BehaviorSubject<any>(this.isLoggedIn);

//   constructor() {
//     console.log('this.isLoggedIn : ', this.isLoggedIn);
//   }

//   checkedLoggedIn() {
//     this.isLoggedIn =
//       Object.keys(localStorage.getItem('user') || '{}').length > 0
//         ? false
//         : true;
//     return this.isLoggedIn;
//   }

//   setHeaderOptions(isLoggedIn: any) {
//     this.headerChange$.next(isLoggedIn);
//   }

//   get headerOptions() {
//     return this.headerChange$.asObservable();
//   }
// }

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router) {}

  login(user: Signin) {
    if (user.email !== '' && user.password !== '') {
      this.loggedIn.next(true);
    }
  }

  logout() {
    localStorage.removeItem('user');
    alert('Logout Successfully');
    this.loggedIn.next(false);
    this.router.navigate(['/signin']);
  }
}
