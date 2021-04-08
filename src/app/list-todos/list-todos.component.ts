import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  // example simple object
  todo = {
    id : 1,
    description : 'my description'
  }

  // example multiple object with Besdt practices -> Create Class Todo
  todos = [
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(2, 'Become an expert at Angular', false, new Date()),
    new Todo(3, 'Practice the lesson', false, new Date()),
  ]

  // example multiple object
  /*
  todos = [
    { id : 1, description : 'my description'},
    { id : 2, description : 'my description 2'},
    { id : 3, description : 'my description 3'},
  ]
  */


  constructor() { }

  ngOnInit() {
  }

}
