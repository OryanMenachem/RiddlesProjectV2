import 'dotenv/config';

import { message } from '../core/generalMessage.js';
import mainMenuManager from '../core/mainManager.js';





message.sayWelcome();

message.displayInstructions();

await mainMenuManager();






