import * as fs from 'fs';
import { Contact } from './Contact';
import { Rolodex } from './Rolodex';

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
                        let contacts = JSON.parse(data);
                        resolve(contacts);
                    }
                }
            );
        })
    }
    
    saveContacts(rolodex: Rolodex): Promise<string> 
    {
        return new Promise(
            (resolve, reject) => 
            {
                const jsonContactList = JSON.stringify(rolodex.contactList);
                
                fs.writeFile(
                    `rolodexi/rolodex.json`,
                    jsonContactList,
                    (err) => {
                        if (err) { 
                            reject(err)
                            return;
                        }
                        
                        resolve('Saved contacts!');
                    }
                )
            }
        )
    }
}

const AccessRolodex = new FileSystem();
export { AccessRolodex };