import { input, colors } from '../utils/generalUtils.js';
import play from './gameFlow.js';
import Player from '../models/Player.js';
import * as services from '../services/services.js';



export default async function adminManager(player) {

    player = new Player(player.id, player.name, player.best_time);

    while (true) {
        showAdminMenu();
        const choice = input();
        const continueMenu = await handleAdminMenuChoice(choice, player);
        if (!continueMenu) break;   
        
    }
}

function showAdminMenu() {

  const border = colors.cyan('║');
  console.log('\nChoose one of the following options: \n');  
  console.log(colors.cyan('╔═══════════════════════════════════╗'));
  console.log(border + '                                   ' + border);
  console.log(border + '  1. Play                          ' + border);
  console.log(border + '  2. View best time                ' + border);
  console.log(border + '  3. View all riddles              ' + border);
  console.log(border + '  4. Add a riddle                  ' + border);
  console.log(border + '  5. Edit a riddle                 ' + border);
  console.log(border + '  6. Delete a riddle               ' + border);
  console.log(border + '  7. Back to main menu             ' + border);
  console.log(border + '                                   ' + border);
  console.log(colors.cyan('╚═══════════════════════════════════╝') + '\n');
}


async function handleAdminMenuChoice(choice, player) {
    
    switch (choice) {
        case '1':
            player = await play(player)
            await services.handleSubmitTime(player.id, player.best_time)
            break;
        case '2':
            console.log(`The best time ever: ${player.best_time} sec.`)
            break;
        case '3':
            await services.sendGetAllRiddlesRequest();
            break;
        case '4':
            await services.sendAddRiddleRequest();
            break;
        case '5':
            await services.sendUpdateRiddleRequest();
            break;
        case '6':
            services.sendDeleteRiddleRequest();
            break;
        case '7':
            return false;
        default:
           console.log('Invalid choice!')
           break;
    }
    return true;
}
