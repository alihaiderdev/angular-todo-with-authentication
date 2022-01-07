import { Router } from '@angular/router';
import { Todo } from './../../models/todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed-todos',
  template: `
    <div class="todos-container">
      <ng-container *ngIf="completedTodos.length > 0; else elseTemplate">
        <h1 class="text-center">Completed Todos</h1>
        <ul style="list-style: none;">
          <li *ngFor="let todo of completedTodos; index as i">
            <app-todo-item
              [todo]="todo"
              [i]="i"
              (todoDelete)="deleteTodo($event)"
            >
            </app-todo-item>
          </li>
        </ul>
      </ng-container>
      <ng-template #elseTemplate>
        <h1 style="line-height: 3rem;">
          No completed todos to display, please complete some todos first!
        </h1>
      </ng-template>
    </div>
  `,
  styles: [],
})
export class CompletedTodosComponent implements OnInit {
  completedTodos: Todo[];
  localTodo: string | null;
  constructor() {
    this.localTodo = localStorage.getItem('completed-todos') || '[]';
    if (this.localTodo === null) {
      this.completedTodos = [];
    }
    this.completedTodos = JSON.parse(this.localTodo);
    console.log(JSON.parse(localStorage.getItem('completed-todos') || '[]'));
  }

  deleteTodo(todo: Todo) {
    this.completedTodos.splice(this.completedTodos.indexOf(todo), 1);
    localStorage.setItem(
      'completed-todos',
      JSON.stringify(this.completedTodos)
    );
  }

  // toggleTodo(todo: Todo) {
  //   let todoIndex = this.completedTodos.indexOf(todo);
  //   this.completedTodos[todoIndex].active =
  //     !this.completedTodos[todoIndex].active;
  //   localStorage.setItem(
  //     'completed-todos',
  //     JSON.stringify(this.completedTodos)
  //   );
  // }
  ngOnInit(): void {}
}
