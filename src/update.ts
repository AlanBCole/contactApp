import { Answers } from './models/Answers';
import { InitModel } from './models/InitModel';

export function update(model: InitModel) {
    const { command, contact, rolodex } = model;
    
    switch (command) {
        case '':
            //startBlank();
            console.log('Starting a blank rolodex...');
            break;
            
        case Answers.New:
            // newContact();
            console.log('Will create a new contact...');
            break;
        
        case Answers.Search:
            // searchContacts();
            console.log('Looking for that contact...');
            break;
            
        case Answers.List:
            // listContacts();
            console.log('Printing all your contacts...');
            break;
            
        case Answers.Edit:
            // editContact(); // add this to rolodex class
            console.log(`Editing ${contact}'s information...`);
            break;
            
        case Answers.Help:
            // print a bunch of helpful stuff
            console.log('Getting helpful information (if there is any)...');
            break;
            
        case Answers.Exit:
            console.log('Exiting app...');
            break;
            
        default:
            console.log(`'${command}' is not (yet?) a command.\nType 'help' to see a list of accepted commands.`);
            break;
            
    }
    
}