import 'dotenv/config';
import { message } from '../server/core/generalMessage.js';
import mainMenuManager from '../server/core/mainManu.js';





message.sayWelcome();

message.showInstructions();

await mainMenuManager();






