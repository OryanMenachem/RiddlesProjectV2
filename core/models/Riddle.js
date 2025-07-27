import {input, colors} from "../../utils/generalUtils.js";

export default class Riddle {

    constructor(riddle) {

        this.id = riddle.id;
        this.category = riddle.category;
        this.difficulty = riddle.difficulty;
        this.riddleDescription = riddle.riddleDescription;
        this.correctAnswer = riddle.correctAnswer;
    }

    
    ask() {

        while (true) {

            this.displayRiddle(); // Riddle description in fine print.
            const answer = input();
            if (answer == this.correctAnswer) { 
                return console.log(colors.success(`\ncorrect answer :)\n`));
            }

            console.log(colors.error(`\nwrong answer :(\n`));
        }
    }

    displayRiddle() {

            console.log(`\nRiddle id: ${colors.cyan(this.id)} \n`) 
            console.log(`category: ${colors.cyan(this.category)} \n`);
            console.log(`Difficulty Level: ${colors.cyan(this.difficulty)} \n`);
            console.log(colors.cyan(`${this.riddleDescription}\n`));
    }
}


            




        

    
