import read from '../../DAL/read.js'
import { riddlesPath } from '../../utils/utils.js';


/**
 * Updates fields of a riddle object by asking the user which fields to change.
 * 
 * @async
 * @param {number} id - The ID of the riddle to update.
 * @returns {Promise<Object|undefined>} The updated riddle object, or undefined if no riddle was found.
 */

export async function updateRiddle(id) {

  const riddle = await read(riddlesPath, id)

  if (!riddle) {return}

  let choice;

  for(const key in riddle) {

    if (key == "id") {continue;}

    while (true) {

    choice = input(`Would you like to change the '${key}' field? (y/n)`)  

    if (choice == 'y') {riddle[key] = input('Update this field'); break;}

    else if (choice == 'n') {break;}

    console.log(colors.error("\nYour selection is invalid.\n"));
    

    }

  }

  return riddle;
}
