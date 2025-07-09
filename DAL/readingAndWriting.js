import {readFile, writeFile} from 'node:fs/promises';
import * as colors from '../design/colors.js'


/**
 * Function to get all data from the database
 * @param {string} path Path to a txt file
 * @returns {Promise<object|string>} JavaScript object with file contents,  or an error message in case of failure
 */

export async function read(path) {
    
    try {

       let data = await readFile(path, 'utf-8');
       
       data = JSON.parse(data);

       return data;
    }
      
    catch (error) { return colors.error(`\nlocation: DAL/read.js - ${error.message}\n`) } 
}



/**
 * Function for recording data in the database
 * @param {string} path Path to a txt file 
 * @param {object} data The data to be written to the database
 * @returns {Promise<string>} Success or error message accordingly
 */

export async function write(path, data) {

    try {

        await writeFile(path, JSON.stringify(data, null, 2))

        return colors.success('\nThe data was successfully added to the database.\n')
    } 

    catch(error) {return colors.error(`\nlocation: DAL/write.js - ${error.message}\n`)}

} 


