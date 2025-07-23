import {readFileSync as read, writeFileSync as write} from 'fs';

/**
 * Reads a numeric id from id.txt, increments it by one,
 * writes the updated value back to the id.txt,
 * and returns the previous id.
 * @returns {number} The previous id value before incrementing
 */


export default  function getId() {

    const path = "C:/Users/om316/OneDrive/Desktop/JavaScript/Projects/RiddlesProjectV2/DB/id.txt"; 
    try {
    let id = read(path);
    id = JSON.parse(id)
    
    const counter = id.id + 1; 
       
    const updatedId = {"id": counter}

    write(path, JSON.stringify(updatedId, null, 2))

    return id["id"];

    } catch(err) {console.log(err.message)}
}








