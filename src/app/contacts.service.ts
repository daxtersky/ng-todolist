import { Injectable } from '@angular/core';

export interface Contact {
  id: number,
  name: string
} 

@Injectable()
export class ContactsService {
  contacts:Array<Contact> = [{
    id: 1,
    name: 'Mike'
  },
  {
    id:2,
    name: 'Ada'
  }]
}