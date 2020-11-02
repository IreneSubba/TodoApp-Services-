import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service'

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
id;
title;
year;
desc;

  constructor(private todoServ: TodoService) { }

  ngOnInit(): void {
  }

  addTodo(){
    this.todoServ.createTodo(this.id,this.title,this.year,this.desc)
    alert("New task added!")
  }
 
  
}
