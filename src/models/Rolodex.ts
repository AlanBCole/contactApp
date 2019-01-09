import { Contact } from './Contact';
import { FileSystem as AccessRolodex } from './FileSystem';
import { InitModel } from './InitModel';
import { searchResponse } from './interfaces';

export class Rolodex {
    
    rolodexName = 'rolodex';
    private _contactList: Contact[] = [];
    
    constructor()
    {
        AccessRolodex.initializeContacts(this.rolodexName)
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
    
    saveContact(contactObject: Contact, editingIndex: number) {
        
        if (editingIndex > -1)
        {
            this._contactList[editingIndex] = contactObject;
            this.saveAllContacts()
            .then(() => {
                
                console.log('Saved changes to contact:\n');
                console.log(`Name: ${contactObject.Name}\nPhone: ${contactObject.Phone}\nEmail: ${contactObject.Email}`);
            })
            .catch(err => console.log('Problem with editing contact', err))
        }
        
        else
        {
            let newContact = new Contact(
            contactObject.Name,
            contactObject.Phone,
            contactObject.Email
        );
        
        this._contactList.push(newContact);
        this.saveAllContacts()
        .then(() => {
            
            console.log('Added new contact:\n');
            console.log(`Name: ${newContact.Name}\nPhone: ${newContact.Phone}\nEmail: ${newContact.Email}`);
        })
        .catch(err => console.log('Problem with saveContact()', err))
        }
    }
    
    deleteContact(editingIndex: number) {
        this._contactList.splice(editingIndex, 1);
        this.saveAllContacts();
    }
    
    searchContacts(name: string): searchResponse {
        
        let foundContact = this._contactList.find((contact: Contact) => {
            
                return contact.Name.toLowerCase() === name.toLowerCase();
            });
            
        if (!foundContact)
        {
            console.log(`Did not find ${name}'s information.`);
            return { 
                contact: new Contact(), 
                editingIndex: -1 
            };
        }
        else
        {
            console.log(`Found ${name}'s information:: `, foundContact);
        
            return { 
                contact: foundContact,
                editingIndex: this._contactList.findIndex((contact) => contact === foundContact) };
        }
    }

    printContacts() {
        // console.log(`${this.rolodexName}:`)
        this._contactList.forEach((contact: Contact) => console.log(`\nName: ${contact.Name}\nPhone: ${contact.Phone}\nEmail: ${contact.Email}`))
    }
    
    saveAllContacts() {
        return AccessRolodex.saveContacts(this)
            .then(message => console.log(message))
    }
}