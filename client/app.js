import {message} from '../core/generalMessage.js';
import loginMenu from '../core/menus/loginMenu.js';
import { mongoConnection } from '../DB/mongo.js';



await mongoConnection.open();

message.sayWelcome();

message.displayInstructions();

await loginMenu();


