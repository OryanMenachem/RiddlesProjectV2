import {readFile} from 'node:fs/promises';


/**
 * @param {*} path Path to a tet file
 * @returns JavaScript object with file contents
 */

export default async function read(path) {
    
    try {

       let dbContents = await readFile(path, 'utf-8');
       
       dbContents = JSON.parse(dbContents);

       return dbContents;
    }
      
    catch (error) { return error.message ; } 
}



// const path = "C:/Users/om316/OneDrive/Desktop/JavaScript/Projects/RiddlesProjectV2/DB/riddles.txt"

