import readline from 'readline-sync';
import * as colors from './colors.js'

export function input(message) {

    if (message) { console.log(`\n${message}\n`) }
    
    return readline.question(colors.cyan('> '))
}
    
    

