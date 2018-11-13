import { Contact } from './Contact-class';
import { fileSystem } from './FileSystem-class';

export class ContactBook {
    
    rolodexName: string;
    private _contactList: Contact[] = [];
    
    constructor(rolodexName: string)
    {
        this.rolodexName = rolodexName;
        
        fileSystem.initializeContacts(rolodexName)
            .then((contacts: any) => {
                
                if (!contacts.length) {
                    return
                }
                
                this.contactList = contacts;
            })
    }
    
    get contactList(): Contact[] {
        return this._contactList
    }
    
    set contactList(contacts) {
        this._contactList = contacts
    }
    
    addContact(contactObject: Contact) {
        let newContact = new Contact(contactObject.Name, contactObject.Phone);
        this._contactList.push(newContact);
        this.saveContacts()
            .then((message: any) => {
                console.log(message);
                this.printContacts()
            })
    }

    printContacts() {
        this.contactList.forEach((contact: Contact) => console.log(`\nName: ${contact.Name}\nPhone: ${contact.Phone}`))
    }
    
    saveContacts() {
        return fileSystem.saveContacts(this);
    }
}