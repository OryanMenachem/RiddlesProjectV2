import {input} from '../utils/utils.js'
import * as colors from '../utils/colors.js'
import leaderBoard from './leaderBoard.js'
import sendRequest from '../client/httpRequests.js'


let flag = true; // Control flow if the user chooses to exit flag = false

/**
 * Displays a menu and continues prompting the user
 * until a valid choice is made.
 * 
 * If the user's choice is valid, the corresponding function
 * is executed.
 * @async
 */

export default async function menu() {
    
    do {

        showMenu();

        await choiceHandling(); 
    
    } while (flag) 
}



function showMenu() {

    
    console.log('\nChoose one of the following options: \n');
    
    console.log(`${colors.cyan('**************')} MENU ${colors.cyan('**************')}`);
    console.log(`${colors.cyan('* 1.')} Play the game               ${colors.cyan('*')}`);
    console.log(`${colors.cyan('* 2.')} Create a new riddle         ${colors.cyan('*')}`);
    console.log(`${colors.cyan('* 3.')} Read all riddles            ${colors.cyan('*')}`);
    console.log(`${colors.cyan('* 4.')} Update an existing riddle   ${colors.cyan('*')}`);
    console.log(`${colors.cyan('* 5.')} Delete a riddle             ${colors.cyan('*')}`);
    console.log(`${colors.cyan('* 6.')} View leaderboard            ${colors.cyan('*')}`);
    console.log(`${colors.cyan('* 7.')} Exit                        ${colors.cyan('*')}`);
    console.log(colors.cyan('**********************************\n'));

}




/**
 * Receives a selection from the user, 
 * and executes functions accordingly, 
 * @async
 */

async function choiceHandling() {

    const choice = input();
    let url;

    switch (choice) {
        case '1':
            break;
        case '2':
            break;

        case '3':
            url = `http://localhost:5000/riddles/all`;
            console.log(await sendRequest(url))
            break;

        case '4':
            break;

        case '5': 
            const id = input('Enter the riddle id');
            url = `http://localhost:5000/riddles/${id}`;
            console.log(await sendRequest(url,'DELETE'));
            break; 
            
        case '6':
            await leaderBoard();
            break;
        case '7':
            console.log('\ngood by :)');
            flag = false;
            break;
        default:
            console.log(colors.error('\nOption does not exist!'));
            break;
        }
    }
            
            
