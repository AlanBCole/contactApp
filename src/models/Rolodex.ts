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
        
        let newContact: Contact;
        
        if (contactObject.Email) 
        {
            newContact = new Contact(
                contactObject.Name,
                contactObject.Phone,
                contactObject.Email
            );
        }
        else
        {
            newContact = new Contact(contactObject.Name, contactObject.Phone);    
        }
        
        this._contactList.push(newContact);
        this.saveContacts()
            .then((message: any) => {
                console.log(message);
                this.printContacts();
            })
            .catch(err => console.log('Problem with addContact()', err))
    }

    printContacts() {
        // console.log(`${this.rolodexName}:`)
        this.contactList.forEach((contact: Contact) => console.log(`\nName: ${contact.Name}\nPhone: ${contact.Phone}\nEmail: ${contact.Email}`))
    }
    
    saveContacts() {
        return AccessRolodex.saveContacts(this)
            .then(message => console.log(message))
    }
}