import * as message from '../core/generalMessage.js';
import menu from '../core/menu.js'
import { startConection } from '../DB/mongo_connection.js';

await startConection();

message.sayWelcome();

message.displayInstructions();

menu();


