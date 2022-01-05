import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" routerLink="/">Todo With Authentication</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ng-container *ngIf="checkedLoggedIn; else elseTemplate">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link"
                  routerLink="/add-todo"
                  routerLinkActive="active"
                  >Add Todo</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  routerLink="/todos"
                  routerLinkActive="active"
                  >Todos List</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  routerLink="/completed-todos"
                  routerLinkActive="active"
                  >Completed Todos</a
                >
              </li>
            </ul>

            <div class="btn-group">
              <button
                type="button"
                class="btn btn-success dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <!-- {{ user.firstName + ' ' + user.lastName }} -->
                {{ user.email }}
              </button>
              <ul class="dropdown-menu">
                <li style="cursor: pointer;">
                  <a class="dropdown-item" (click)="logout()">Logout</a>
                </li>
              </ul>
            </div>
          </ng-container>
          <ng-template #elseTemplate>
            <div class="d-flex justify-content-end align-center w-100">
              <!-- <ul class="navbar-nav me-auto mb-2 mb-lg-0"> -->
              <!-- class="d-flex align-center justify-content-between  w-100" -->
              <ul
                style="list-style: none;"
                class="d-flex align-center navbar-nav"
              >
                <li class="nav-item">
                  <a
                    class="nav-link"
                    routerLink="/signin"
                    routerLinkActive="active"
                    >Signin</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    routerLink="/signup"
                    routerLinkActive="active"
                    >Signup</a
                  >
                </li>
              </ul>
            </div>
          </ng-template>
        </div>
      </div>
    </nav>
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  // isLoggedIn = JSON.parse(localStorage.getItem('user') || '{}') ? false : true;
  isLoggedIn =
    Object.keys(JSON.parse(localStorage.getItem('user') || '{}')).length > 0;
  user = JSON.parse(localStorage.getItem('user') || '{}');
  checkedLoggedIn: boolean;
  constructor(private router: Router, private authService: AuthService) {
    // console.log(
    //   this.isLoggedIn,
    //   'user',
    //   this.user,
    //   this.authService.checkedLoggedIn()
    // );
    this.checkedLoggedIn = this.authService.checkedLoggedIn();
  }

  ngOnInit(): void {}

  logout() {
    localStorage.removeItem('user');
    alert('Logout Successfully');
    this.router.navigate(['/signin']);
  }
}
