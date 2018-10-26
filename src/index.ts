import { ContactBook } from './ContactBook-class';
import { Contact } from './Contact-class';

const rolodex = new ContactBook();
const alan = new Contact('Alan', '333-333-3333');
const leRoi = new Contact('Le Roi', '999-999-9999');

rolodex.addContact(alan);
rolodex.addContact(leRoi);
rolodex.printContacts();
