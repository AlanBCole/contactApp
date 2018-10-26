import { Contact } from "./Contact-class";

export class ContactBook {

    ContactList: Contact[] = [];

    addContact(contactObject: Contact) {
        let newContact = new Contact(contactObject.Name, contactObject.Phone);
        this.ContactList.push(newContact);
    }

    printContacts() {
        this.ContactList.forEach(contact => console.log(`\nName: ${contact.Name}\nPhone: ${contact.Phone}`))
    }
}