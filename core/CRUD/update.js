import { input, colors } from "../../utils/generalUtils.js";


/**
 * Asks the user which fields of an object they want to update, and updates them with new values.
 *
 * The function loads an object by its ID from a data source (like a file).
 * It then goes through each field (except 'id') and asks the user if they want to change it.
 * If the user agrees, they are prompted to enter a new value for that field.
 *
 * @async
 * @param {string} path - The path to the data source (e.g., a file).
 * @param {number} id - The ID of the object to find and update.
 * @returns {Promise<Object|string>} The updated object if found and edited, 
 * or an error message if something went wrong.
 */

export async function updateRiddle(riddle) {
  
  for(const key in riddle) {

    if (key == "_id") {delete riddle[key]; continue;}
    else if (key == "id") {delete riddle[key]; continue;}

    const choice = askYesNo(`Would you like to change the '${key}' field? (y/n)`)  
    if (choice) {riddle[key] = input('Update this field')}
    else  {delete riddle[key];}

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