import readline from 'readline-sync';
import * as colors from './colors.js'




/**
 * Asks the user to type something in the console and makes sure it's not empty.
 * @param {string} [message] - Optional text to show before asking for input.
 * @returns {string} The text entered by the user.
 */

export function input(message) {

    if (message) { console.log(`\n${message}\n`)}

    let userInput;

    while(true) {

        userInput = readline.question(colors.cyan('> '));
        console.log();
        if (userInput) {return userInput}
        console.log(colors.error('\nNo input was entered!\n'));
        
    }
}
    
    

