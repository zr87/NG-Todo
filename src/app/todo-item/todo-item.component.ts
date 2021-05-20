import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {Todo} from "../shared/todo.model";
import {DataService} from "../shared/data.service";
import {MatDialog} from "@angular/material/dialog";
import {EditTodoDialogComponent} from "../edit-todo-dialog/edit-todo-dialog.component";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})


export class TodoItemComponent implements OnInit {

  todos: Todo[] | undefined

  constructor(private dataService: DataService, private dialog: MatDialog) { }



  ngOnInit() {

    this.todos = this.dataService.getAllTodos()
}
onFormSubmit(form:NgForm){

    if(form.invalid) return alert("Form  is invalid");



    console.log("form Submit")
    console.log(form)

  this.dataService.addTodo(new  Todo(form.value.text))

  form.reset()
}

onTodoClicked(){
    alert("Todo was clicked")
}
  toggleCompleted(todo:Todo) {
    todo.completed = !todo.completed;
  }
editTodo(todo:Todo){
    // @ts-ignore
  const index = this.todos.indexOf(todo)

  let dialogRef = this.dialog.open(EditTodoDialogComponent, {
    width: '700px',
    data: todo
  });
  dialogRef.afterClosed().subscribe((result) => {
    if (result){
      this.dataService.updateTodo(index, result)
    }

  })

}
  deleteTodo(todo:Todo){
    // @ts-ignore
    const index = this.todos.indexOf(todo)
    this.dataService.deleteTodo(index)
  }

}



