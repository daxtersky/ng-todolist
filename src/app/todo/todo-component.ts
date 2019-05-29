import { Component, OnInit } from '@angular/core';

interface TodoListElement {
  title: string,
  complete: boolean,
  notes?: string
}

@Component({
  selector: 'todo-component',
  templateUrl: 'todo-component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class ToDoComponent implements OnInit {

  newToDoTitle;

  todoList: Array<TodoListElement> = [{
      title: 'zrobić śniadanie',
      complete: true
    },
    {
      title: 'zrobić zakupy',
      complete: true
    },
    {
      title: 'zrobić obiad',
      complete: false,
      notes: 'I am soo lazy'
    }];


  ngOnInit() {
    console.log('Todo Component initialized :D');
    console.log(this.todoList);
  }
  
  /*
  * adds an item name to the list 
  * if there's no text, function returns nothing
  * it adds a string as a new todo list item
  */
  addTodoItem() {
    if (!this.newToDoTitle) {
      return;
    }
    const newToDo:TodoListElement = {
      title: this.newToDoTitle,
      complete: false
    };
    this.todoList.push(newToDo);
    this.newToDoTitle = '';
  }

}
