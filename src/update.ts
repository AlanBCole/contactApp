import { Answers } from './models/Answers';
import { InitModel } from './models/InitModel';
import { Contact } from './models/Contact';
import { Rolodex } from './models/Rolodex';
import { searchResponse } from './models/interfaces';
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
        
        // cases exposed to users
        case Answers.New:
            
            model.command = Answers.GetName;
            update(model);
            
            break;
        
        case Answers.Search:
            
            askQuestion('What is the name of the contact you are looking for? > ')
            .then( (name: string) => {
                const response = model.rolodex.searchContacts(name);
                
                console.log(response);
                model.contact = response.contact;
                model.editingIndex = response.editingIndex;
                model.command = '';

                update(model);
            });
            
            break;
            
        case Answers.List:
            
            console.log('Printing all your contacts...');
            model.rolodex.printContacts();
            model.command = '';
            
            update(model);
            
            break;
            
        case Answers.Edit:
            
            // editContact(); // add this to rolodex class
            askQuestion('What is the name of the contact you want to edit? > ')
            .then( (name: string) => {
                const response: searchResponse = model.rolodex.searchContacts(name);
                
                // console.log(response);
                model.contact = response.contact;
                model.editingIndex = response.editingIndex;
                model.command = Answers.GetName;
                
                update(model);
            })
            
            
            break;
            
        case Answers.Help:
            
            // print a bunch of helpful stuff
            console.log('Getting helpful information (if there is any)...');
            break;
            
        case Answers.Exit:
            
            console.log('Exiting app...');
            break;
            
        // cases not exposed to users.    
        case Answers.GetName:
            
            askQuestion(`${model.command.toUpperCase()}: Type the contact's name? (or press enter) > `)
            .then( (name: string) => {
                
                model.command = Answers.GetPhone;
                
                if (name !== '')
                {
                    model.contact.Name = name;
                    update(model);
                }
                else
                {
                    update(model);
                }
            })
            
            break;
            
        case Answers.GetPhone:
            
            askQuestion(`${model.command.toUpperCase()}: Type the contact's phone number? (or press enter) > `)
            .then( (phone: string) => {
                
                model.command = Answers.GetEmail
                
                if (phone !== '')
                {
                    model.contact.Phone = phone;
                    update(model);
                }
                else
                {
                    update(model);
                }
            })
            break;
            
        case Answers.GetEmail:
            
            askQuestion(`${model.command.toUpperCase()}: Type the contact's email address? (or press enter) > `)
            .then( (email: string) => {
                
                model.command = Answers.Save;
                
                if (email)
                {
                    model.contact.Email = email;
                    update(model);
                }
                else
                {
                    update(model);
                }
            })
            
            break;
        
        case Answers.Save:
            
            console.log('\nIn Update save case: ', model.contact);
            
            askQuestion(`${model.command.toUpperCase()}: Do you want to save this contact? (type 'yes' or 'no') > `)
            .then((answer: string) => {
                if (answer.toLowerCase() === 'yes')
                {
                    console.log(`Saving ${model.contact.Name}'s information.`);
                    model.rolodex.addContact(model.contact, model.editingIndex);        
                }
                else
                {
                    console.log('Not saving this contact.');
                }
                
                update();
            })
            
            break;
            
        default:
        
            console.log(`'${model.command}' is not (yet?) a command.\nType 'help' to see a list of accepted commands.`);
            
            update();
            break;
    }
    
}