import {readFile} from 'node:fs/promises';
import * as colors from '../utils/colors.js'

/**
 * Reads JSON data from a file and optionally returns one object by its ID.
 *
 * @async
 * @param {string} path - The file path to read from.
 * @param {number|null} [id=null] - Optional ID to find a specific object in the data.
 * @returns {Promise<Object|Object[]|undefined>} The whole data array, a single object if ID is given and found, or undefined if not found.
 */

export default async function read(path, id = null) {
    
    try {

       let data = await readFile(path, 'utf-8');
       
       data = JSON.parse(data);

       if (id) {
          
          data = data.filter((obj) => obj.id == id)[0];

          if (!data) { console.log(colors.error("\nNo object with such ID was found\n")); return;}

         }

       return data;
    }
      
    catch (error) { return colors.error(`\nlocation: DAL/read.js - ${error.message}\n`) } 
}








