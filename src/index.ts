import { ContactBook } from './ContactBook-class';
import { Contact } from './Contact-class';
import readline from 'readline';

const rolodex = new ContactBook();
const alan = new Contact('Alan', '333-333-3333');
const leRoi = new Contact('Le Roi', '999-999-9999');
var answer = 'not answered yet.'

rolodex.addContact(alan);
rolodex.addContact(leRoi);

let addContact = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

addContact.question("\n*-*-*-*-*\nWould you like to add a new contact? (Y/N)", (response: string) => {
    answer = response;
    console.log(`Answer: ${answer}`);
    rolodex.printContacts();
    addContact.close()
})
