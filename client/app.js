import "dotenv/config";
import {message} from '../core/generalMessage.js';
import loginMenu from '../core/loginMenu.js';





message.sayWelcome();

message.displayInstructions();

await loginMenu();






