import getId from "../../utils/idGenerator.js";
import { input } from "../../utils/generalUtils.js";




/**
 * Creates a new riddle object using user input.
 * Prompts the user to enter details like category, difficulty, description, and answer.
 * @returns {Object} A riddle object with id, category, difficulty, description, and correct answer.
 */

export function createRiddle() {

    const riddle =   {

        id : getId(),
        category : input('Enter the category of the riddle'),
        difficulty : input('Enter the difficulty level of the riddle'),
        riddleDescription : input('Enter the description of the riddle'),
        correctAnswer : input('Enter the correct answer to the riddle')
  }
  
  return riddle
}