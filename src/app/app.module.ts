import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './screens/signup/signup.component';
import { SigninComponent } from './screens/signin/signin.component';
import { CompletedTodosComponent } from './screens/completed-todos/completed-todos.component';
import { TodosListComponent } from './screens/todos-list/todos-list.component';
import { AddTodoComponent } from './screens/add-todo/add-todo.component';
import { PageNotFoundComponent } from './screens/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    CompletedTodosComponent,
    TodosListComponent,
    AddTodoComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    TodoItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
