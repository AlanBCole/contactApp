import { Contact } from './Contact';
import { AccessRolodex } from './FileSystem';

export class Rolodex {
    
    // rolodexName: string;
    private _contactList: Contact[] = [];
    
    constructor()
    {
        AccessRolodex.initializeContacts('rolodex')
            .then((contacts: any) => {
                
                this.contactList = contacts;
            })
            .catch(err => console.log('Problem with initializeContacts()', err))
    }
    
    get contactList(): Contact[] {
        return this._contactList
    }
    
    set contactList(contacts) {
        this._contactList = contacts
    }
    
    addContact(contactObject: Contact) {
        
        let newContact = new Contact(
            contactObject.Name,
            contactObject.Phone,
            contactObject.Email
        );
        
        this._contactList.push(newContact);
        this.saveContacts()
            .then(() => {
                
                console.log(`Added new contact:\n${JSON.stringify(newContact, null, 2)}`);
            })
            .catch(err => console.log('Problem with addContact()', err))
    }

    printContacts() {
        // console.log(`${this.rolodexName}:`)
        this._contactList.forEach((contact: Contact) => console.log(`\nName: ${contact.Name}\nPhone: ${contact.Phone}\nEmail: ${contact.Email}`))
    }
    
    saveContacts() {
        return AccessRolodex.saveContacts(this)
            .then(message => console.log(message))
    }
}