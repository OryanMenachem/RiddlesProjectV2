import * as colors from '../../utils/colors.js'
import {input} from '../../utils/utils.js';

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

            this.toString(); // Riddle description in fine print.

            const answer = input();
 
            if (answer == this.correctAnswer) {

                console.log(colors.success(`\ncorrect answer :)\n`));
                return;
            }

            console.log(colors.error(`\nwrong answer :(\n`));
        }
    }

    toString() {

            console.log(`\nRiddle id: ${colors.cyan(this.id)} \n`) 

            console.log(`category: ${colors.cyan(this.category)} \n`);

            console.log(`Difficulty Level: ${colors.cyan(this.difficulty)} \n`);
            
            console.log(colors.cyan(`${this.riddleDescription}\n`));
    }
}
            


        

    
