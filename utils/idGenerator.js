import {readFileSync as read, writeFileSync as write} from 'fs';


/**
 * Reads a numeric ID from a text file, increments it by one,
 * writes the updated value back to the file,
 * and returns the previous ID.
 * @returns {number} The previous ID value before incrementing
 */

export default function getId() {

    const path = "../DB/id.txt";

    const id = read(path);
    
    const updatedId = {"id": id.id + 1}

    write(path, updatedId)

    return id["id"];
}










