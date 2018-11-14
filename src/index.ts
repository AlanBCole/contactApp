import { ContactBook } from './models/ContactBook-class';
import { Contact } from './models/Contact-class';
import readline from 'readline';
import fs from 'fs';


let rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

const alansRolodex = new ContactBook('alans-rolodex');

askAQuestion('Would you like to create or search? (type create or search): ')
.then(answer => {
    console.log(alansRolodex);
    console.log(answer)
});
// const aNewContact = new Contact('Jerry', '303.333.3030')
// alansRolodex.addContact(aNewContact);



function askAQuestion(question: string): Promise<string> {
    return new Promise((resolve, reject) => {
        rl.question(
            `\n*-*-*-*-*-*-*-*-*\n${question}`,
            (answer) => {
                rl.close();
                resolve(answer);
            }
        );        
    })
}


// addContact.question("\n*-*-*-*-*\nWould you like to add a new contact? (Y/N)", (response: string) => {
//     answer = response;
//     console.log(`Answer: ${answer}`);
//     rolodex.printContacts();
//     addContact.close()
// })
