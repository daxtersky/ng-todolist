import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToDoComponent } from './todo/todo-component';

import { ToDoList } from './data.service';
import { ContactsService } from './contacts.service';

import { ContactItemComponent } from './contact-item/contact-item.component';
import { ContactsListComponent } from './contact-list/contacts-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ToDoComponent, ContactItemComponent, ContactsListComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ ToDoList, ContactsService ]
})
export class AppModule { }
