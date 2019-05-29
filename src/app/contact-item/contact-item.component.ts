import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contacts.service';
// import { GravatarComponent } from 

@Component({
  // moduleId: module.id,
  selector: 'contact-item',
  templateUrl: 'contact-item.component.html'
  // directives: [GravatarComponent]
})
export class ContactItemComponent {
  @Input() contact: Contact;
}
