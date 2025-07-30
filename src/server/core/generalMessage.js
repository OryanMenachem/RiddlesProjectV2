import { colors } from '../utils/generalUtils.js';

export const message = {
  sayWelcome() {
    console.log(`\nWelcome to the${colors.cyan(' RIDDLE ')}game!\n`);
  },

  showInstructions() {
    console.log(
      'In this game, you will need to answer several regular' +
      '\nand multiple-choice questions with different difficulty levels.\n'
    );
  },

  sayHelloPlayer(playerName) {
    console.log(`\nHello ${colors.cyan(playerName)}, starting right away...\n`);
  },

  showSuccessMessage() {
    console.log(colors.cyan('Congratulations!', 'you won the RIDDLES game.\n'));
  }
};