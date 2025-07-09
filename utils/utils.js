import readline from 'readline-sync';
import * as colors from '../design/colors.js'

export function input() {return readline.question(colors.cyan('> '))}

