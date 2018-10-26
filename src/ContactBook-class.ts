import { Contact } from "./Contact-class";

export class ContactBook {

    ContactList: Contact[] = [];

    addContact(name: string, phone: string) {
        let newContact = new Contact(name, phone);
        this.ContactList.push(newContact);
    }
}