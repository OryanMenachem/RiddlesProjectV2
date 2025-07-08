import {readFile} from 'node:fs/promises';
import * as colors from '../UI/colors.js'


/**
 * Function to get all data from the database
 * @param {string} path Path to a txt file
 * @returns {Promise<object|string>} JavaScript object with file contents,  or an error message in case of failure
 */

export default async function read(path) {
    
    try {

       let data = await readFile(path, 'utf-8');
       
       data = JSON.parse(data);

       return data;
    }
      
    catch (error) { return colors.error(`\nlocation: DAL/read.js - ${error.message}\n`) } 
}








