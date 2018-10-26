"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contact_class_1 = require("./Contact-class");
var ContactBook = /** @class */ (function () {
    function ContactBook() {
        this.ContactList = [];
    }
    ContactBook.prototype.addContact = function (contactObject) {
        var newContact = new Contact_class_1.Contact(contactObject.Name, contactObject.Phone);
        this.ContactList.push(newContact);
    };
    ContactBook.prototype.printContacts = function () {
        this.ContactList.forEach(function (contact) { return console.log("\nName: " + contact.Name + "\nPhone: " + contact.Phone); });
    };
    return ContactBook;
}());
exports.ContactBook = ContactBook;
