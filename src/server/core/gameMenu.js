import { input, colors } from '../utils/generalUtils.js';
import { riddlesOperations, displayTopTen } from './services.js';



/**
 * Displays a menu and continues prompting the user
 * until a valid choice is made.
 * 
 * If the user's choice is valid, the corresponding function
 * is executed.
 * @async
 */

export default async function menu() {

    while(true) { 
        menu(); 
        let choice = input();
        const shouldContinue = await handleChoice(choice);  
        if (!shouldContinue) {break;}
    } 
}



function menu() {

    const border = colors.cyan('║');
    console.log('\nChoose one of the following options: \n');
    console.log(colors.cyan('╔════════════════════ MENU ════════════════════╗'));
    console.log(border + ' 1. Play the game               ' + border);
    console.log(border + ' 2. Create a new riddle         ' + border);
    console.log(border + ' 3. Read all riddles            ' + border);
    console.log(border + ' 4. Update an existing riddle   ' + border);
    console.log(border + ' 5. Delete a riddle             ' + border);
    console.log(border + ' 6. View leaderboard            ' + border);
    console.log(border + ' 7. Exit                        ' + border);
    console.log(colors.cyan('╚══════════════════════════════════════════════╝\n'));
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
            result = await riddlesOperations.create();      
            break;
        case '3':
            result = await riddlesOperations.read();     
            break;
        case '4':
            result = await riddlesOperations.update(); 
            break;
        case '5': 
            result = await riddlesOperations.delete();
            break; 
        case '6':
            const leaderBoard = await riddlesOperations.leaderBoard();
            displayTopTen(leaderBoard);
            return true;
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
//     riddleDescription: "I am an odd number. Take away one letter and I become even. What am I?",
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
