import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TodoItemComponent } from './todo-item/todo-item.component';
import {MatIconModule} from '@angular/material/icon';
import { TodosComponent } from './todos/todos.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EditTodoDialogComponent } from './edit-todo-dialog/edit-todo-dialog.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodosComponent,
    EditTodoDialogComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
      MatIconModule,
      MatDialogModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
