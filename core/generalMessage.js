import * as colors from '../utils/colors.js'


export const sayWelcome = () => {console.log(`\nWelcome to the` + colors.cyan(` QUIZ `) + `game!\n`)};

export const displayInstructions = () => {console.log(`In this game, you will need to answer several regular and multiple-choice questions with different difficulty levels.\n`)};

export const sayHelloPlayer = (playerName) => { console.log(`\nHello ` + colors.cyan(playerName) + `, starting right away...\n`)}

export const DisplaySuccessMessage = () => {console.log(colors.cyan(`Congratulations! `), `you won the QUIZ game.\n`)};