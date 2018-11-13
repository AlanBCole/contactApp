import * as fs from 'fs';
import { Contact } from './Contact-class';
import { ContactBook } from './ContactBook-class';

class FileSystem {
    
    initializeContacts(rolodexname: string) 
    {
        return new Promise((resolve, reject) => {
            
            fs.readFile(
                `rolodexi/${rolodexname}.json`,
                'utf8',
                (err, data) => {
                    
                    // if (err) {
                    //     reject(err);
                    // } 
                    
                    if (data === 'undefined' || data === undefined) {
                        resolve([]);
                    }
                    
                    else {
                        let file = JSON.parse(data);
                        resolve(file);
                    }
                }
            );
        })
    }
    
    saveContacts(rolodex: ContactBook): Promise<string> 
    {
        return new Promise(
            (resolve, reject) => 
            {
                const jsonContactList = JSON.stringify(rolodex.contactList);
                
                fs.writeFile(
                    `rolodexi/${rolodex.rolodexName}.json`,
                    jsonContactList,
                    (err) => {
                        // if (err) reject(err);
                        resolve('Saved contacts!');
                    }
                )
            }
        )
    }
}

const fileSystem = new FileSystem();
export { fileSystem };