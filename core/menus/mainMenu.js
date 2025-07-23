import {input, colors} from "../../utils/generalUtils.js"
import {handleMenu} from "./mainMenu_services.js"



// Control flow if the user chooses to exit flag = false
let flag = true; 

/**
 * Displays a menu and continues prompting the user
 * until a valid choice is made.
 * 
 * If the user's choice is valid, the corresponding function
 * is executed.
 * @async
 */

export default async function menu() {
    
    while(flag) { 

        showMainMenu(); 
        let choice = input();
        await handleChoice(choice); 
        
    } 
}



function showMainMenu() {

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

async function handleChoice(choice) {
   
    let result;

    switch (choice) {

        case '1':
            break;
        case '2':
            result = await handleMenu.create();      
            break;
        case '3':
            result = await handleMenu.read();     
            break;
        case '4':
            result = await handleMenu.update(); 
            break;
        case '5': 
            result = await handleMenu.delete();
            break; 
        case '6':
            await handleMenu.leaderBoard();
            return;
        case '7':
            console.log('\ngood by :)');
            flag = false;
            return;
        default:
            console.log(colors.error('\nOption does not exist!'));
            return;
        }
        console.log(result);
    }
            
            



