import readline from 'readline-sync';
import * as colors from '../design/colors'



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


function inputChoice() {

    let choice = readline.question('> ');
    return choice;
}


async function choiceHandling(choice) {

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
            console.log('\nOption does not exist!\n');
            return false;
        }
    }
            
            
export default function menu() {

    let rightChoice = true;

    do {

        showMenu();
        let choice = inputChoice();
        rightChoice = choiceHandling(choice);
    
    } while (!rightChoice)
}
