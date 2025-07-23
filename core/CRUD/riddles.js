import getId from "../../utils/idGenerator.js";
import { input, colors } from "../../utils/generalUtils.js";

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



/**
 * Goes over each field in a given riddle object and lets the user choose if they want to update it.
 *
 * The function checks each field in the object, except for 'id' and '_id'.
 * For every field, it asks the user a yes/no question:
 * - If the user says "yes", they are asked to enter a new value.
 *
 * @async
 * @param {Object} riddle - The object with fields the user can update.
 * @returns {Promise<Object>} The updated object, with changed or removed fields.
 */

export async function updateRiddle(riddle) {
  
  for(const key in riddle) {

    if (key == "_id") {delete riddle[key]; continue;}
    else if (key == "id") {delete riddle[key]; continue;}

    const choice = askYesNo(`Would you like to change the '${key}' field? (y/n)`)  
    if (choice) {riddle[key] = input('Update this field')}
  }
  
  return riddle;
}
  

/**
 * Asks the user a yes/no question until they give a valid answer.
 *
 * Accepts only 'y' or 'n' (case-insensitive). Keeps asking if the input is invalid.
 *
 * @param {string} message - The question to display to the user.
 * @returns {Promise<boolean>} Returns true if the user answers 'y', false if 'n'.
 */


function askYesNo(message) {
  while (true) {
    const answer = input(message);

    if (answer === "y") return true;
    if (answer === "n") return false;

    console.log(colors.error("\nInvalid input. Please enter 'y' or 'n'.\n"));
  }
}