import { TodosListComponent } from './screens/todos-list/todos-list.component';
import { CompletedTodosComponent } from './screens/completed-todos/completed-todos.component';
import { AddTodoComponent } from './screens/add-todo/add-todo.component';
import { SigninComponent } from './screens/signin/signin.component';
import { SignupComponent } from './screens/signup/signup.component';
import { PageNotFoundComponent } from './screens/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'add-todo', component: AddTodoComponent },
  { path: 'todos', component: TodosListComponent },
  { path: 'completed-todos', component: CompletedTodosComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
