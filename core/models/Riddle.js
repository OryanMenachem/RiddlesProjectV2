import * as colors from '../../design/colors.js'
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

            console.log(`\nRiddle ${this.id}:`, colors.cyan(this.category), `\n`);

            console.log(`Difficulty Level:`, colors.cyan(this.difficulty), `\n`);
            
            console.log(`${this.riddleDescription} \n`);

            const answer = input();
 
            if (answer == this.correctAnswer) {

                console.log(colors.success(`\ncorrect answer :)\n`));
                break;
            }

            console.log(colors.error(`\nwrong answer :(\n`));
        }
    }
}
            

   
            

            
        

    
