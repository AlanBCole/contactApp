"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Rolodex_1 = require("./models/Rolodex");
var readline_1 = __importDefault(require("readline"));
var rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
var alansRolodex = new Rolodex_1.Rolodex('alans-rolodex');
askAQuestion('Would you like to create or search? (type create or search): ')
    .then(function (answer) {
    console.log(alansRolodex);
    console.log(answer);
});
// const aNewContact = new Contact('Jerry', '303.333.3030')
// alansRolodex.addContact(aNewContact);
function askAQuestion(question) {
    return new Promise(function (resolve, reject) {
        rl.question("\n*-*-*-*-*-*-*-*-*\n" + question, function (answer) {
            rl.close();
            resolve(answer);
        });
    });
}
// addContact.question("\n*-*-*-*-*\nWould you like to add a new contact? (Y/N)", (response: string) => {
//     answer = response;
//     console.log(`Answer: ${answer}`);
//     rolodex.printContacts();
//     addContact.close()
// })
//# sourceMappingURL=index.js.map