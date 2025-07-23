import {input, colors} from "../../utils/generalUtils.js"
import {riddlesCrud} from "./gameMenu.services.js"




/**
 * Displays a menu and continues prompting the user
 * until a valid choice is made.
 * 
 * If the user's choice is valid, the corresponding function
 * is executed.
 * @async
 */

export default async function gameMenu() {
    let flag = true; 
    while(flag) { 

        showMainMenu(); 
        let choice = input();
        flag = await handleChoice(choice);  //flag =>  Control flow if the user chooses to exit flag = false
        
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
            result = await riddlesCrud.create();      
            break;
        case '3':
            result = await riddlesCrud.read();     
            break;
        case '4':
            result = await riddlesCrud.update(); 
            break;
        case '5': 
            result = await riddlesCrud.delete();
            break; 
        case '6':
            await riddlesCrud.leaderBoard();
            return;
        case '7':
            console.log('\ngood by :)');
            return false;
        default:
            console.log(colors.error('\nInvalid choice!'));
            return;
        }
        console.log(JSON.stringify(result, null, 2));
        return true;
    }
            
            


// [
//   // Easy
//   {
//     category: "Logic",
//     difficulty: "easy",
//     riddleDescription: "What has keys but can't open locks?",
//     correctAnswer: "Piano"
//   },
//   {
//     category: "Everyday",
//     difficulty: "easy",
//     riddleDescription: "What has a face and two hands but no arms or legs?",
//     correctAnswer: "Clock"
//   },
//   {
//     category: "Object",
//     difficulty: "easy",
//     riddleDescription: "What can you catch but not throw?",
//     correctAnswer: "Cold"
//   },

//   // Medium
//   {
//     category: "Math",
//     difficulty: "medium",
//     riddleDescription: "I am an even number. Take away one letter and I become odd. What am I?",
//     correctAnswer: "Seven"
//   },
//   {
//     category: "Logic",
//     difficulty: "medium",
//     riddleDescription: "The more you take, the more you leave behind. What are they?",
//     correctAnswer: "Footsteps"
//   },
//   {
//     category: "Numbers",
//     difficulty: "medium",
//     riddleDescription: "What is the square root of 144?",
//     correctAnswer: "12"
//   },

//   // Hard
//   {
//     category: "Wordplay",
//     difficulty: "hard",
//     riddleDescription: "What word is spelled incorrectly in every dictionary?",
//     correctAnswer: "Incorrectly"
//   },
//   {
//     category: "Math",
//     difficulty: "hard",
//     riddleDescription: "What is the next prime number after 47?",
//     correctAnswer: "53"
//   },
//   {
//     category: "Logic",
//     difficulty: "hard",
//     riddleDescription: "What disappears as soon as you say its name?",
//     correctAnswer: "Silence"
//   }
// ]
