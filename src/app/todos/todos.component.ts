import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Todo} from "../shared/todo.model";
import {Output} from "@angular/core";
import {DataService} from "../shared/data.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

 @Input() todo: Todo | undefined
 @Output() todoClicked: EventEmitter<void> = new EventEmitter()
 @Output() editClicked: EventEmitter<void> = new EventEmitter()
 @Output() deleteClicked: EventEmitter<void> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  toggleCompleted(todo:Todo){
   todo.completed = !todo.completed;
  }
  onTodoClicked(){
   this.todoClicked.emit()
  }
  onEditClicked(){
   this.editClicked.emit()
}
onDeleteClicked(){
   this.deleteClicked.emit()
}
}
