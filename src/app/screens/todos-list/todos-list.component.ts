import { Todo } from './../../models/todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos-list',
  template: `
    <div class="todos-container">
      <ng-container *ngIf="todos.length > 0; else elseTemplate">
        <h1 class="text-center">All Todos</h1>
        <ul style="list-style: none;">
          <li *ngFor="let todo of todos; index as i">
            <app-todo-item
              [todo]="todo"
              [i]="i"
              (todoDelete)="deleteTodo($event)"
              (todoToggle)="toggleTodo($event)"
            >
            </app-todo-item>
          </li>
        </ul>
      </ng-container>
      <ng-template #elseTemplate>
        <h1>No todos to display, please add some todos first!</h1>
      </ng-template>
    </div>
  `,
  styles: [],
})
export class TodosListComponent implements OnInit {
  todos: Todo[];
  localTodo: string | null;
  constructor() {
    this.localTodo = localStorage.getItem('todos') || '[]';
    if (this.localTodo === null) {
      this.todos = [];
    }
    this.todos = JSON.parse(this.localTodo);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  deleteTodo(todo: Todo) {
    // console.log(todo);
    this.todos.splice(this.todos.indexOf(todo), 1);
    // console.log('todos: ', this.todos);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo) {
    let todoIndex = this.todos.indexOf(todo);
    this.todos[todoIndex].active = !this.todos[todoIndex].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  ngOnInit(): void {}
}
