export class Contact {
    
    Name: string;
    Phone: string;
    Email: string;
    
    constructor(name: string = '', phone: string = '', email: string = '') {
        this.Name = name;
        this.Phone = phone;
        this.Email = email;
    }

}