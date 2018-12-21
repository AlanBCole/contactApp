import { Rolodex } from './Rolodex';
import { Contact } from './Contact';

export class InitModel {
    command: string;
    contact: Contact;
    rolodex: Rolodex;
    
    constructor(command: string = '') {
        this.command = command;
        this.contact = new Contact();
        this.rolodex = new Rolodex();
    }
}