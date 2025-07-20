import readline from 'readline-sync';
import chalk from 'chalk';



export const paths = {
    id : "C:/Users/om316/OneDrive/Desktop/JavaScript/Projects/RiddlesProjectV2/DB/files/id.txt",
    riddles : "C:/Users/om316/OneDrive/Desktop/JavaScript/Projects/RiddlesProjectV2/DB/riddles.txt",
    players : "C:/Users/om316/OneDrive/Desktop/JavaScript/Projects/RiddlesProjectV2/DB/files/players.txt"
}


export const colors = {
    cyan : chalk.cyan,
    error : chalk.red,
    success : chalk.green
}



/**
 * Asks the user to type something in the console and makes sure it's not empty.
 * @param {string} [message] - Optional text to show before asking for input.
 * @returns {string} The text entered by the user.
 */

export function input(message) {

    if (message) { console.log(`\n${message}\n`)}

    let userInput;

    while(true) {

        userInput = readline.question(colors.cyan('> ')).trim();
        console.log();
        if (userInput) {return userInput}
        console.log(colors.error('\nNo input was entered!\n'));
        
    }
}


/**
 * Measures the execution time of a given synchronous function.
 * @param {Function} fn - The function to be executed and measured.
 * @returns {number} The time in seconds it took to execute the function.
 */


export function timeDecorator(fn) {

    const start = Date.now();
    fn();
    const end = Date.now();
    
    return (end - start) / 1000;

}

    

