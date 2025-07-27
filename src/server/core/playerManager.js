import { input, colors } from '../utils/generalUtils.js';
import startGame from './gameFlow.js';
import Player from '../models/Player.js';
import { sendCreateRiddleRequest as addRiddle } from './services.js';

export default async function playerManager(player) {

    player = new Player(player.id, player.name, player.best_time);
    let continueMenu = true;
    while (continueMenu) {
        showPlayerMenu();
        const choice = input();
        const { result, shouldContinue } = await handlePlayerMenuChoice(choice, player);
        console.log(JSON.stringify(result, null, 2));
    }
}

function showPlayerMenu() {

    console.log('\nChoose one of the following options: \n');

    console.log(colors.cyan('╔═══════════════════════════════════╗'));
    console.log(colors.cyan('║') + '                                   ' + colors.cyan('║'));
    console.log(colors.cyan('║') + '  1. Start game                    ' + colors.cyan('║'));
    console.log(colors.cyan('║') + '  2. Add riddle                    ' + colors.cyan('║'));
    console.log(colors.cyan('║') + '  3. Watch my best time            ' + colors.cyan('║'));
    console.log(colors.cyan('║') + '  4. Back to main menu             ' + colors.cyan('║'));
    console.log(colors.cyan('║') + '                                   ' + colors.cyan('║'));
    console.log(colors.cyan('╚═══════════════════════════════════╝') + '\n');
}


async function handlePlayerMenuChoice(choice, player) {
    switch (choice) {
        case '1':
            return { result: await startGame(player), shouldContinue: true };
        case '2':
            return { result: await addRiddle(), shouldContinue: true };
        case '3':
            return { result: `The best time ever: ${player.best_time} sec.`, shouldContinue: true };
        case '4':
            return { result: 'Returns to the main menu...', shouldContinue: false };
        default:
            return { result: 'Invalid choice!', shouldContinue: true };
    }
}








