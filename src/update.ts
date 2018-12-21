import { Answers } from './models/Answers';
import { InitModel } from './models/InitModel';
import { askQuestion } from './AskQuestion';

export function update(model: InitModel) {
    
    switch (model.command) {
        
        case '':
            console.log('Starting a blank rolodex...');
            
            askQuestion(`What would you like to do? You can type 'new', 'edit', 'list', 'search', 'help', or 'exit'.`)
                .then((answer: string) => {
                    model.command = answer;
                    update(model);
                }
            )
            
            break;
            
        case Answers.New:
            // askAQuestion('')
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
            console.log(`Editing ${model.contact.Name}'s information...`);
            break;
            
        case Answers.Help:
            // print a bunch of helpful stuff
            console.log('Getting helpful information (if there is any)...');
            break;
            
        case Answers.Exit:
            console.log('Exiting app...');
            break;
            
        default:
            console.log(`'${model.command}' is not (yet?) a command.\nType 'help' to see a list of accepted commands.`);
            break;
            
    }
    
}