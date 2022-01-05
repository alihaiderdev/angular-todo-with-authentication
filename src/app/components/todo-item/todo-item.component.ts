import { Todo } from './../../models/todo';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  template: `
    <div class="my-3">
      <h2 class="m-0" [ngClass]="{ strike: !todo.active }">
        Task: {{ todo.task }}
      </h2>

      <div
        class="d-flex space-between align-center m-0 w-100"
        [ngClass]="{ strike: !todo.active }"
      >
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
      <div class="mb-3 form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="todo{{ i }}"
          (click)="onCheckboxClick(todo)"
          [checked]="!todo.active"
        />
        <label class="form-check-label" for="todo{{ i }}">Complete</label>
      </div>
      <button class="btn btn-danger btn-sm" (click)="deleteItem(todo)">
        Delete
      </button>
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
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoToggle: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  deleteItem(todo: Todo): void {
    this.todoDelete.emit(todo);
  }
  onCheckboxClick(todo: Todo) {
    this.todoToggle.emit(todo);
  }
}
