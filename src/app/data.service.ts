import { Injectable } from '@angular/core';

export interface ToDoListElement1 {
  title: string,
  complete: boolean,
  notes?: string
}

@Injectable()
export class ToDoList {



  toDos: Array<ToDoListElement1> = [{
      title: 'eat breakfast',
      complete: true
    },
    {
      title: 'do shopping',
      complete: true
    },
    {
      title: 'make dinner',
      complete: false,
      notes: 'I am soo lazy'
    },
    {
      title: 'clear your room',
      complete: false
    },
    {
      title: 'walk the dog',
      complete: true
    },
    {
      title: 'study Angular',
      complete: true,
      notes: 'Oh yeah'
    },
    {
      title: 'brush your teeth',
      complete: false
    }]
}