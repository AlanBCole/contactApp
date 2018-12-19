import { Contact } from './Contact';
export declare class Rolodex {
    rolodexName: string;
    private _contactList;
    constructor(rolodexName: string);
    contactList: Contact[];
    addContact(contactObject: Contact): void;
    printContacts(): void;
    saveContacts(): Promise<string>;
}
