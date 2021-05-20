import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoItemComponent} from "./todo-item/todo-item.component";

const routes: Routes = [
  {path:"", component: TodoItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
