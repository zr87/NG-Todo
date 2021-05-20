import { Injectable } from '@angular/core';
import {Todo} from "./todo.model";
import {HttpClient} from "@angular/common/http";
import {catchError, retry} from "rxjs/operators";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] | undefined =[
    new Todo("Test"),
  ];
  static readonly  API_Url = 'http://localhost:3000/todos';
  constructor(private http: HttpClient) {
  }
  getTodo(todo:Todo){

  }

  getAllTodos() {
    return this.todos
  }
  addTodo(todo:Todo){

    this.todos?.push(todo)
  }
  updateTodo(index:number, updatedTodo:Todo){
    // @ts-ignore
    this.todos[index] = updatedTodo
  }
  deleteTodo(index:number){
    this.todos?.splice(index, 1)
  }
}
