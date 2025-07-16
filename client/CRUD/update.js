import read from "../../DAL/read.js";
import { input, colors } from "../../utils/generalUtils.js";


/**
 * Asks the user which fields of an object they want to update, and updates them.
 * 
 * @async
 * @param {string} path - The path to the data source (e.g., a file).
 * @param {number} id - The ID of the object to find and update.
 * @returns {Promise<Object|undefined>} The updated object, or undefined if the object was not found.
 */


export async function updateObject(path, id) {

  const object = await read(path, id)

  if (!object) {return}

  let choice;

  for(const key in object) {

    if (key == "id") {continue;}

    while (true) {

    choice = input(`Would you like to change the '${key}' field? (y/n)`)  

    if (choice == 'y') {object[key] = input('Update this field'); break;}

    else if (choice == 'n') {break;}

    console.log(colors.error("\nYour selection is invalid.\n"));
    

    }

  }

  return object;
}