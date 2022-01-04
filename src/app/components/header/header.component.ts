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
              <a class="nav-link" routerLink="/todos" routerLinkActive="active"
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
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" routerLink="/signin" routerLinkActive="active"
                >Signin</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/signup" routerLinkActive="active"
                >Signup</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
