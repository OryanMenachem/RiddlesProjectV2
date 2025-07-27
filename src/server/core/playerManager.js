import { input, colors } from '../utils/generalUtils.js';

import StartGame from './gameFlow.js';
import Player from '../models/Player.js';
import { sendCreateRiddleRequest as addRiddle, handleSubmitTime as myBestTime } from './services.js';


export default async function playerManager(player) {

    let flag = true;
    let result;
    player = new Player(player.id, player.name, player.best_time)
    while(flag) {     

        showPlayerMenu(); 
        const choice = input();
        
        switch (choice) {
          case '1':
            result = await StartGame(player);
            break;
          case '2':
            result = await addRiddle();
            break;
          case '3':
            result = `The best time ever: ${player.best_time} sec.`;
          break;
          case '4':
            flag = false;
            result = "Returns to the main menu..."
            break;
          default:
            result = "Invalid choice!";
            break;
        }
        console.log(JSON.stringify(result, null, 2));
    } 
}


function showPlayerMenu() {
    
    console.log('\nChoose one of the following options: \n');
    
    console.log(colors.cyan('****************************'));
    console.log(`${colors.cyan('* 1.')} Start game            ${colors.cyan('*')}`);
    console.log(`${colors.cyan('* 2.')} Add riddle            ${colors.cyan('*')}`);
    console.log(`${colors.cyan('* 3.')} Watch my best time    ${colors.cyan('*')}`);
    console.log(`${colors.cyan('* 4.')} Back to the main menu ${colors.cyan('*')}`);
    console.log(colors.cyan('****************************\n'));
}








