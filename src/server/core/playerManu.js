import { input, colors } from '../utils/generalUtils.js';
import startGame from './gameFlow.js';
import Player from '../models/Player.js';
import { sendAddRiddleRequest as addRiddle } from '../services/services.js';
import {handleSubmitTime} from '../services/services.js';


export default async function playerManager(player) {

    player = new Player(player.id, player.name, player.best_time);

    while (true) {
        showPlayerMenu();
        const choice = input();
        const continueMenu = await handlePlayerMenuChoice(choice, player);
         if (!continueMenu) break;   
        
    }
}

function showPlayerMenu() {

    const border = colors.cyan('║');
    console.log('\nChoose one of the following options: \n');
    console.log(colors.cyan('╔═══════════════════════════════════╗'));
    console.log(border + '                                   ' + border);
    console.log(border + '  1. Play                          ' + border);
    console.log(border + '  2. View best time                ' + border);
    console.log(border + '  3. Add a riddle                  ' + border);
    console.log(border + '  4. Back to main menu             ' + border);
    console.log(border + '                                   ' + border);
    console.log(colors.cyan('╚═══════════════════════════════════╝') + '\n');
    
}


async function handlePlayerMenuChoice(choice, player) {
    
    switch (choice) {
        case '1':
            player = await startGame(player)
            await handleSubmitTime(player.id, player.best_time)
            break;
        case '2':
            console.log(`The best time ever: ${player.best_time} sec.`)
            break;
        case '3':
            await addRiddle()
            break;
        case '4':
            return false;
        default:
           console.log('Invalid choice!')
           break;
    }
    return true;
}








