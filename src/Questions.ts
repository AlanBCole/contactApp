import readline from 'readline';

import { InitModel } from './models/InitModel';
import { Answers } from './models/Answers';


export function askQuestion(question: string): Promise<string> {
    
    let rl = readline.createInterface(
        {
            input: process.stdin,
            output: process.stdout
        }
    );
    
    return new Promise((resolve, reject) => {
        
        rl.question(
            `\n*-*-*-*-*-*-*-*-*\n${question}`,
            (answer) => {
                resolve(answer);
                rl.close();
            }
        );        
    })
}

export function confirmCommand(model: InitModel) {
    
    const { command, contact } = model;
    
    return new Promise((resolve, reject) => {
        
        askQuestion(`${command.toUpperCase()}: Are you sure you want to ${command} ${contact.Name}'s information? (type 'yes' or 'no') > `)
        .then((answer: string) => {
            
            if (answer.toLowerCase() === 'yes' && command === Answers.Save)
            {
                console.log(`Saving ${model.contact.Name}'s information.`);
                resolve();
            }
            
            else if (answer.toLowerCase() === 'yes' && command === Answers.Remove)
            {
                console.log(`Deleting ${contact.Name}'s information.`);
                resolve();
            }
            
            else
            {
                console.log(`Will not ${command} this contact.`);
                resolve();
            }
        })
    })
}

