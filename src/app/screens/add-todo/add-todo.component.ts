import { Todo } from './../../models/todo';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-todo',
  template: `
    <form [formGroup]="todoForm" (ngSubmit)="addTodo()" novalidate>
      <h1 class="text-center">Add Todo</h1>
      <div class="mb-3">
        <label for="task" class="form-label">Task*</label>
        <input
          type="text"
          class="form-control"
          id="task"
          name="task"
          formControlName="task"
          placeholder="Enter your task"
        />
      </div>
      <div
        *ngIf="!task?.valid && (task?.dirty || task?.touched)"
        class="alert alert-danger"
      >
        <div [hidden]="!task?.errors?.['required']">Task is required</div>
      </div>
      <div class="mb-3">
        <label for="dateTime" class="form-label">Date & Time*</label>
        <input
          type="datetime-local"
          class="form-control"
          id="dateTime"
          name="dateTime"
          formControlName="dateTime"
        />
      </div>
      <div
        *ngIf="!dateTime?.valid && (dateTime?.dirty || dateTime?.touched)"
        class="alert alert-danger"
      >
        <div [hidden]="!dateTime?.errors?.['required']">
          Date and time is required
        </div>
      </div>
      <button
        type="submit"
        class="btn btn-success w-100 btn-lg"
        [disabled]="todoForm.invalid"
      >
        Add Todo
      </button>
    </form>
  `,
  styles: [],
})
export class AddTodoComponent implements OnInit {
  todos: Todo[];
  localTodo: string | null;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.localTodo = localStorage.getItem('todos');
    if (this.localTodo === null) {
      this.todos = [];
    }
    this.todos = JSON.parse(this.localTodo || '[]');
  }
  todoForm = this.formBuilder.group({
    task: ['', [Validators.required]],
    dateTime: ['', [Validators.required]],
  });

  get task() {
    return this.todoForm.get('task');
  }
  get dateTime() {
    return this.todoForm.get('dateTime');
  }

  ngOnInit(): void {}

  addTodo() {
    if (this.task?.value !== '' && this.dateTime?.value !== '') {
      const todo = {
        id: uuidv4(),
        task: this.task?.value,
        dateTime: this.dateTime?.value,
        active: true,
        addedBy: JSON.parse(localStorage.getItem('user') || '{}').email,
      };
      this.todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(this.todos));
      alert('Todo Added Successfully');
      this.todoForm.reset();
      this.router.navigate(['/todos']);
    } else {
      alert('Please fill all fields all are required!');
    }

    console.log(this.todoForm);
  }
}
