"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var FileSystem = /** @class */ (function () {
    function FileSystem() {
    }
    FileSystem.prototype.initializeContacts = function (rolodexname) {
        return new Promise(function (resolve, reject) {
            fs.readFile("rolodexi/" + rolodexname + ".json", 'utf8', function (err, data) {
                // if (err) {
                //     reject(err);
                // } 
                if (data === 'undefined' || data === undefined) {
                    resolve([]);
                }
                else {
                    var file = JSON.parse(data);
                    resolve(file);
                }
            });
        });
    };
    FileSystem.prototype.saveContacts = function (rolodex) {
        return new Promise(function (resolve, reject) {
            var jsonContactList = JSON.stringify(rolodex.contactList);
            fs.writeFile("rolodexi/" + rolodex.rolodexName + ".json", jsonContactList, function (err) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve('Saved contacts!');
            });
        });
    };
    return FileSystem;
}());
var fileSystem = new FileSystem();
exports.fileSystem = fileSystem;
//# sourceMappingURL=FileSystem.js.map