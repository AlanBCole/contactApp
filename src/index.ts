import { update } from './update';
import { InitModel } from './models/InitModel';

const args = process.argv.slice(2);
let model: InitModel;

switch (args.length) {
    
    case 1:
        model = new InitModel(args[0]);
        break;
        
    case 2:
        model = new InitModel(args[0], args[1]);
        break;

    default:
        model = new InitModel();
        break;
}

console.log('The model: ', model);
update(model);


// let rl = readline.createInterface(
//     {
//         input: process.stdin,
//         output: process.stdout
//     }
// );

// const alansRolodex = new Rolodex('alans-rolodex');
// const aNewContact = new Contact('Jerry', '303.333.3030')
// alansRolodex.addContact(aNewContact);


// askAQuestion('Would you like to create or search? (type create or search): ')
// .then(answer => {
//     console.log(alansRolodex);
//     console.log(answer)
// });




// function askAQuestion(question: string): Promise<string> {
//     return new Promise((resolve, reject) => {
//         rl.question(
//             `\n*-*-*-*-*-*-*-*-*\n${question}`,
//             (answer) => {
//                 rl.close();
//                 resolve(answer);
//             }
//         );        
//     })
// }


// addContact.question("\n*-*-*-*-*\nWould you like to add a new contact? (Y/N)", (response: string) => {
//     answer = response;
//     console.log(`Answer: ${answer}`);
//     rolodex.printContacts();
//     addContact.close()
// })
