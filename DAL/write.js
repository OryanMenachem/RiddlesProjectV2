import {writeFile} from "node:fs/promises";
import  {colors} from "../utils/generalUtils.js";

/**
 * Function for recording data in the database
 * @param {string} path Path to a txt file 
 * @param {object} data The data to be written to the database
 * @returns {Promise<string>} Success or error message accordingly
 */

export default async function write(path, data) {

    try {

        await writeFile(path, JSON.stringify(data, null, 2))

        return colors.success('\nThe data was successfully added to the database.\n')
    } 

    catch(error) {return colors.error(`\nERROR \nlocation: DAL/write.js.  \n${error.message}\n`)}

} 





