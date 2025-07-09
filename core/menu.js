import {input} from '../utils/utils.js'
import * as colors from '../utils/colors.js'


/**
 * Displays a menu and continues prompting the user
 * until a valid choice is made.
 * 
 * If the user's choice is valid, the corresponding function
 * is executed.
 * @async
 */

let flag = true;

export default async function menu() {

    let rightChoice = true;

    do {

        showMenu();

        await choiceHandling(); 
    
    } while (flag) 
}



function showMenu() {

    
    console.log('Choose one of the following options: \n');
    
    console.log(colors.cyan('************** MENU **************'));
    console.log(colors.cyan('* 1. Play the game               *'));
    console.log(colors.cyan('* 2. Create a new riddle         *'));
    console.log(colors.cyan('* 3. Read all riddles            *'));
    console.log(colors.cyan('* 4. Update an existing riddle   *'));
    console.log(colors.cyan('* 5. Delete a riddle             *'));
    console.log(colors.cyan('* 6. View leaderboard            *'));
    console.log(colors.cyan('* 7. Exit                        *'));
    console.log(colors.cyan('**********************************\n'));

}




/**
 * Receives a selection from the user, 
 * and executes functions accordingly, 
 * @async
 */

async function choiceHandling() {

    const choice = input();

    switch (choice) {
        case '1':
            break;
        case '2':
            break;
        case '3':
            break;
        case '4':
            break;
        case '5':
            break;
        case '6':
            break;
        case '7':
            console.log('\ngood by :)');
            flag = false;
            break;
        default:
            console.log(colors.error('\nOption does not exist!\n'));
            break;
        }
    }
            
            
// menu();