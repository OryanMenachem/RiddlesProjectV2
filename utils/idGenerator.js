import {readFileSync as read, writeFileSync as write} from 'fs';
import { json } from 'stream/consumers';



/**
 * Reads a numeric ID from a text file, increments it by one,
 * writes the updated value back to the file,
 * and returns the previous ID.
 * @returns {number} The previous ID value before incrementing
 */


export default  function getId() {

    const path = "C:/Users/om316/OneDrive/Desktop/JavaScript/Projects/RiddlesProjectV2/DB/id.txt";

    let id = read(path);

    id = JSON.parse(id)
    
    const counter = id.id + 1; 
       
    const updatedId = {"id": counter}

    write(path, JSON.stringify(updatedId, null, 2))

    return id["id"];
}










