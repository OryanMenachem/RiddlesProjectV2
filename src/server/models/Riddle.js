import { input, colors } from '../utils/generalUtils.js';

export default class Riddle {
    constructor({ id, category, difficulty, riddleDescription, correctAnswer }) {
        this.id = id;
        this.category = category;
        this.difficulty = difficulty;
        this.riddleDescription = riddleDescription;
        this.correctAnswer = correctAnswer;
    }

    ask() {
        while (true) {
            this.showRiddle();
            const answer = input();
            if (answer === this.correctAnswer) {
                console.log(colors.success('\ncorrect answer :)\n'));
                return;
            }
            console.log(colors.error('\nwrong answer :(\n'));
        }
    }

    showRiddle() {
        console.log(`Category: ${colors.cyan(this.category)}\n`);
        console.log(`Difficulty Level: ${colors.cyan(this.difficulty)}\n`);
        console.log(colors.cyan(`${this.riddleDescription}\n`));
    }
}


            




        

    
