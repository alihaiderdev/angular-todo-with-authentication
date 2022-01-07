import { Router } from '@angular/router';
import { Todo } from './../../models/todo';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  template: `
    <!-- [ngClass]="{ strike: !todo.active }" -->
    <div class="my-3">
      <h2 class="m-0">Task: {{ todo.task }}</h2>

      <div class="d-flex space-between align-center m-0 w-100">
        <h3 class="my-0">
          <b>Date:</b>
          {{
            todo.dateTime.split('T')[0].split('-')[2] +
              '-' +
              todo.dateTime.split('T')[0].split('-')[1] +
              '-' +
              todo.dateTime.split('T')[0].split('-')[0]
          }}
        </h3>
        <h3 class="my-0 mx-5">
          <b>Time:</b> {{ todo.dateTime.split('T')[1] }}
        </h3>
      </div>
      <ng-container *ngIf="path === '/todos'; else elseTemplate">
        <div class="mb-3 form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="todo{{ i }}"
            (click)="onCheckboxClick(todo)"
            [checked]="!todo.active"
          />
          <label class="form-check-label" for="todo{{ i }}">Complete</label>
        </div></ng-container
      >
      <ng-template #elseTemplate>
        <button class="btn btn-danger btn-sm" (click)="deleteItem(todo)">
          Delete
        </button>
      </ng-template>
    </div>
  `,
  styles: [
    `
      .strike {
        text-decoration: line-through;
      }
    `,
  ],
})
export class TodoItemComponent implements OnInit {
  path: string;
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoToggle: EventEmitter<Todo> = new EventEmitter();

  constructor(private router: Router) {
    this.path = this.router.url;
    // console.log(this.router.url, 'this.router.url', this.path);
    // this.check = this.path === this.router.url;
  }

  ngOnInit(): void {}

  deleteItem(todo: Todo): void {
    this.todoDelete.emit(todo);
  }
  onCheckboxClick(todo: Todo) {
    this.todoToggle.emit(todo);
  }
}
