"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ContactBook_class_1 = require("./ContactBook-class");
var Contact_class_1 = require("./Contact-class");
var readline_1 = __importDefault(require("readline"));
var rolodex = new ContactBook_class_1.ContactBook();
var alan = new Contact_class_1.Contact('Alan', '333-333-3333');
var leRoi = new Contact_class_1.Contact('Le Roi', '999-999-9999');
var answer = 'not answered yet.';
rolodex.addContact(alan);
rolodex.addContact(leRoi);
var rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("\n*-*-*-*-*\nWould you like to add a new contact? (Y/N)", function (response) {
    console.log("Answer: " + response);
    answer = response;
    console.log(answer);
    rolodex.printContacts();
    rl.close();
});
