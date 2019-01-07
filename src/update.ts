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
            
            model.command = Answers.GetName;
            update(model);
            
            break;
        
        case Answers.GetName:
            
            askQuestion(`${model.command.toUpperCase()}: Type the contact's name? (or press enter) > `)
            .then( (name: string) => {
                
                model.command = Answers.GetPhone;
                
                if (name)
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
                
                if (phone)
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
            console.log(model.contact);
            
            askQuestion(`${model.command.toUpperCase()}: Do you want to save this contact? (type 'yes' or 'no') > `)
            .then((answer: string) => {
                if (answer.toLowerCase() === 'yes')
                {
                    console.log(`Saving ${model.contact.Name}'s information.`);
                    model.rolodex.addContact(model.contact);        
                }
                else
                {
                    console.log('Not saving this contact.');
                }
                
                update();
            })
            
            break;
            
        case Answers.Search:
            
            askQuestion('What is the name of the contact you are looking for? > ')
            .then( (name: string) => {
                const contacts = model.rolodex.contactList;
                const foundContact = contacts.filter((contact: Contact) => contact.Name.toLowerCase() === name.toLowerCase());
                
                if (foundContact[0])
                {
                    model.contact = foundContact[0];
                    model.command = Answers.GetName;
                    update(model);
                }
                else
                {
                    console.log(`No contact with the name ${name} was found.`);
                    update();
                }
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