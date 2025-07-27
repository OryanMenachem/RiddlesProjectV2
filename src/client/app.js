import 'dotenv/config';
import { message } from '../server/core/generalMessage.js';
import mainMenuManager from '../server/core/mainManager.js';





message.sayWelcome();

message.displayInstructions();

await mainMenuManager();






