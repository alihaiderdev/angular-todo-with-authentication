import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: ` <div>
    <h1>404 - Page Not Found</h1>
  </div>`,
  styles: [
    `
      div {
        width: 100%;
        height: calc(100% - 55px);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      h1 {
        font-size: 4rem;
        font-weight: bolder;
        line-height: 5rem;
      }
    `,
  ],
})
export class PageNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
