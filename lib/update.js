"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function update(argv) {
    var command = argv.command, object = argv.object, rolodex = argv.rolodex;
    return new Promise(function (resolve, reject) {
        switch (command) {
            case '':
                console.log('You did not type in a command');
                resolve('You did not type in a command');
                break;
            case 'Answer.New':
                console.log('Will create a new thing...');
        }
    });
}
exports.update = update;
//# sourceMappingURL=update.js.map