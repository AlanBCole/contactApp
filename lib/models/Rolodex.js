"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contact_1 = require("./Contact");
var FileSystem_1 = require("./FileSystem");
var Rolodex = /** @class */ (function () {
    function Rolodex(rolodexName) {
        var _this = this;
        this._contactList = [];
        this.rolodexName = rolodexName;
        FileSystem_1.fileSystem.initializeContacts(rolodexName)
            .then(function (contacts) {
            if (!contacts.length) {
                return;
            }
            _this.contactList = contacts;
        })
            .catch(function (err) { return console.log(err, 'initializeContact()'); });
    }
    Object.defineProperty(Rolodex.prototype, "contactList", {
        get: function () {
            return this._contactList;
        },
        set: function (contacts) {
            this._contactList = contacts;
        },
        enumerable: true,
        configurable: true
    });
    Rolodex.prototype.addContact = function (contactObject) {
        var _this = this;
        var newContact = new Contact_1.Contact(contactObject.Name, contactObject.Phone);
        this._contactList.push(newContact);
        this.saveContacts()
            .then(function (message) {
            console.log(message);
            _this.printContacts();
        })
            .catch(function (err) { return console.log(err, 'addContact()'); });
    };
    Rolodex.prototype.printContacts = function () {
        console.log(this.rolodexName + ":");
        this.contactList.forEach(function (contact) { return console.log("\nName: " + contact.Name + "\nPhone: " + contact.Phone); });
    };
    Rolodex.prototype.saveContacts = function () {
        return FileSystem_1.fileSystem.saveContacts(this);
    };
    return Rolodex;
}());
exports.Rolodex = Rolodex;
//# sourceMappingURL=Rolodex.js.map