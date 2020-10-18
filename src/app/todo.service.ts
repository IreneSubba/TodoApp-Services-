import{Injectable} from '@angular/core'

@Injectable ({
    providedIn:'root'

})
export class TodoService{
    todoDetails=[
      {id:1, title:'task 1', date:'22-09-2020', description:'this is task 1'},
    //  {id:2, title:'task 2',  date:'22-09-2020',description:'this is task 2'},
    //  {id:3, title:'task 3', date:'22-09-2020' ,description:'this is task 3'}
    ]
    createTodo(id, title, year, desc){
        this.todoDetails.push({id, title, date:year, description:desc})
    }
    
    

  
}