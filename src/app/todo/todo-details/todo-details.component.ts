import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service'
@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  
todoDetails
  
  constructor(private todoServ:TodoService) { }

  ngOnInit(): void {
    //Instantiated everytime the component is created
    this.todoDetails = this.todoServ.todoDetails
  }

 
}
