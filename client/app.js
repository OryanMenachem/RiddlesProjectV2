import {message} from '../core/generalMessage.js';
import menu from '../core/menu.js'
import { mongoConnection } from '../DB/mongo.js';



await mongoConnection.open();

message.sayWelcome();

message.displayInstructions();

await menu();


