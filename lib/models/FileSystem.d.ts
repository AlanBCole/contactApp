import { Rolodex } from './Rolodex';
declare class FileSystem {
    initializeContacts(rolodexname: string): Promise<{}>;
    saveContacts(rolodex: Rolodex): Promise<string>;
}
declare const fileSystem: FileSystem;
export { fileSystem };
