import { ContactBook } from './models/ContactBook-class';
import { Contact } from './models/Contact-class';
import readline from 'readline';
import fs from 'fs';


const alansRolodex = new ContactBook('alans-rolodex');
const aNewContact = new Contact('Jerry', '303.333.3030')

alansRolodex.addContact(aNewContact);
// alansRolodex.printContacts();





// const rolodex = new ContactBook();
// rolodex.ContactList = rolodex.getContacts();
// const alan = new Contact('Alan', '333-333-3333');
// const leRoi = new Contact('Le Roi', '999-999-9999');

// rolodex.addContact(alan);
// rolodex.addContact(leRoi);

// let rl = readline.createInterface(
//     {
//         input: process.stdin,
//         output: process.stdout
//     }
// );

// function askAQuestion(question: string): Promise<string> {
//     return new Promise((resolve, reject) => {
//         rl.question(
//             '\n*-*-*-*-*-*-*-*-*\nWould you like to create a new contact or search for a contact? (type create or search)',
//             (answer) => resolve(answer)
//         );        
//     })
// }


// addContact.question("\n*-*-*-*-*\nWould you like to add a new contact? (Y/N)", (response: string) => {
//     answer = response;
//     console.log(`Answer: ${answer}`);
//     rolodex.printContacts();
//     addContact.close()
// })
