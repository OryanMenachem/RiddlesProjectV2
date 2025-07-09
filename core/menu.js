import {input} from '../utils/utils.js'
import * as colors from '../design/colors.js'


/**
 * Displays a menu and continues prompting the user
 * until a valid choice is made.
 * 
 * If the user's choice is valid, the corresponding function
 * is executed.
 */

export default async function menu() {

    let rightChoice = true;

    do {

        showMenu();

        rightChoice = await choiceHandling(); 
    
    } while (!rightChoice) //Check if the user selection is incorrect.
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
    console.log(colors.cyan('**********************************\n'));

}




/**
 * Handles the user's selection if it is valid, 
 * and then returns true, otherwise returns false.
 * @returns {Promise<boolean>}
 */
async function choiceHandling() {

    const choice = input();

    switch (choice) {
        case '1':
            return true;
        case '2':
            return true;
        case '3':
            return true;
        case '4':
            return true;
        case '5':
            return true;
        case '6':
            return true;
        default:
            console.log(colors.error('\nOption does not exist!\n'));
            return false;
        }
    }
            
            
menu();