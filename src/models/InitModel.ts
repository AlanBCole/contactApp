import { Rolodex } from './Rolodex';

export class InitModel {
    command: string;
    contact: string;
    rolodex: Rolodex;
    
    constructor(command: string = '', contact: string = '') {
        this.command = command;
        this.contact = contact;
        this.rolodex = new Rolodex();
    }
}