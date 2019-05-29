import { Component, OnInit } from '@angular/core';
import { ContactsService, Contact } from './contacts.service';
import { ContactsListComponent } from './contact-list/contacts-list.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  { 
  public contacts: Array<Contact>;

  ngOnInit() {
    this.contacts = this.contactsService.contacts;
  }

  constructor(private contactsService: ContactsService) { }
}
