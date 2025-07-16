import {readFileSync as read, writeFileSync as write} from 'fs';
import { paths } from './generalUtils.js';



/**
 * Reads a numeric ID from a text file, increments it by one,
 * writes the updated value back to the file,
 * and returns the previous ID.
 * @returns {number} The previous ID value before incrementing
 */


export default  function getId() {

    try {

    let id = read(paths.id);

    id = JSON.parse(id)
    
    const counter = id.id + 1; 
       
    const updatedId = {"id": counter}

    write(paths.id, JSON.stringify(updatedId, null, 2))

    return id["id"];

    } catch(err) {console.log(err.message)}
}








