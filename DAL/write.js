import {writeFile} from 'node:fs/promises';


/**
 * Function for recording data in the database
 * @param {string} path Path to a txt file 
 * @param {*} data The data to be written to the database
 * @returns {Promise<string>} Success or error message accordingly
 */

async function write(path, data) {

    try {

        await writeFile(path, JSON.stringify(data, null, 2))

        return '\nThe data was successfully added to the database.\n'
    } 

    catch(error) {return `\n${error.message}\n`}

} 






// const path = "C:/Users/om316/OneDrive/Desktop/JavaScript/Projects/RiddlesProjectV2/DB/riddles.txt"