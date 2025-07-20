import {readFile} from "node:fs/promises";
import {colors} from "../../utils/generalUtils.js";

/**
 * Reads JSON data from a txt file and optionally returns one object by its ID.
 *
 * @async
 * @param {string} path - The file path to read from.
 * @param {number|null} [id=null] - Optional ID to find a specific object in the data.
 * @returns {Promise<Object|Object[]|undefined>} The whole data array, a single object if ID is given and found, or undefined if not found.
 */



export default async function read(path, id = null) {
    
    try {

       let data = await readFile(path, 'utf-8');
      
       if (!data) { throw new Error("No data found in the file at the given path")}

       data = JSON.parse(data);

       if (data.length == 0) { throw new Error("The file contains only an empty array.")}
       
       
       if (id) {
          
          data = data.find(obj => obj.id == id)     //data = data.filter((obj) => obj.id == id)[0];

          if (!data) { throw new Error("No object with such ID was found")}

         }

       return data;
    }
      
    catch (error) { return  {error : error.message}} 
}








