import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../todo.service'
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoDetailsName
  constructor(private todoList:TodoService) { }

  ngOnInit(): void {
    this.todoDetailsName=this.todoList.todoDetails
  }

}
