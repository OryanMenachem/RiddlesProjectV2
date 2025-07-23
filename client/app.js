import {message} from '../core/generalMessage.js';
import mainMenu from '../core/menus/mainMenu.js'
import { mongoConnection } from '../DB/mongo.js';



await mongoConnection.open();

message.sayWelcome();

message.displayInstructions();

await mainMenu();


