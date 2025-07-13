import {readFile} from 'node:fs/promises';
import * as colors from '../utils/colors.js'


/**
 * Reads and parses JSON data from a file. Optionally returns a specific object by ID.
 * 
 * @async
 * @param {string} path - Path to the JSON text file.
 * @param {number|null} [id=null] - Optional ID to find a specific object.
 * @returns {Promise<Object|Object[]|string>} The full data array, a specific object if ID is given, or an error message.
 */

export default async function read(path, id = null) {
    
    try {

       let data = await readFile(path, 'utf-8');
       
       data = JSON.parse(data);

       if (id) {
          
          data = data.filter((obj) => obj.id == id)[0]

          if (!data) {return colors.error("No object with such ID was found")}
       }

       return data;
    }
      
    catch (error) { return colors.error(`\nlocation: DAL/read.js - ${error.message}\n`) } 
}








