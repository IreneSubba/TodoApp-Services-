import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoCreateComponent } from './todo/todo-create/todo-create.component';
import { TodoDetailsComponent } from './todo/todo-details/todo-details.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';

const routes: Routes = [
  { path: '', component:TodoCreateComponent},
  { path: 'todoList', component:TodoListComponent},
  { path:'todoDetails', component:TodoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
