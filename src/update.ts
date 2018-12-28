import { Answers } from './models/Answers';
import { InitModel } from './models/InitModel';
import { Contact } from './models/Contact';
import { Rolodex } from './models/Rolodex';
import { askQuestion } from './AskQuestion';


export function update(model: InitModel = new InitModel()) {
    
    switch (model.command) {
        
        case '':
            
            askQuestion(`What would you like to do? You can type 'new', 'edit', 'list', 'search', 'help', or 'exit'. > `)
                .then((answer: string) => {
                    model.command = answer;
                    update(model);
                }
            )
            
            break;
            
        case Answers.New:
            
            askQuestion('What is the new contact\'s name? (type \'cancel\' to stop) > ')
            .then( name => {
                
                if (name.toLowerCase() === 'cancel')
                {
                    update()
                }
                else
                {
                    model.contact.Name = name ;
                    
                    askQuestion('What is the new contact\'s phone number? > ')
                    .then( phoneNumber => {
                        model.contact.Phone = phoneNumber;
                        
                        askQuestion('What is the new contact\'s email? > ')
                        .then( email => {
                            model.contact.Email = email;
                            model.rolodex.addContact(model.contact);
                            
                            update();
                        });
                    });
                }
            });
            
            break;
        
        case Answers.Search:
            // for now just print the contacts but build a search method into Rolodex later
            model.rolodex.printContacts();
            
            model.command = '';
            update(model);
            
            break;
            
        case Answers.List:
            console.log('Printing all your contacts...');
            model.rolodex.printContacts();
            
            update();
            
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
            
            update();
            break;
    }
    
}