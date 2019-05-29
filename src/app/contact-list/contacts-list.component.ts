import { Component, Input } from '@angular/core';
import { Contact } from '../contacts.service';
import { ContactItemComponent } from '../contact-item/contact-item.component'

@Component({
  // moduleId: module.id, // what is it?
  selector: 'contacts-list',
  templateUrl: 'contacts-list.component.html',
  // directives: [ContactItemComponent]
})
export class ContactsListComponent {
  @Input() contacts:Array<Contact>
}