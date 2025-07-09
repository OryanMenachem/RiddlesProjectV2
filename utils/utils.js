import readline from 'readline-sync';
import * as colors from './colors.js'

export function input() {return readline.question(colors.cyan('> '))}

