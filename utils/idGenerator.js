import read from "../DAL/read.js"
import write from "../DAL/write.js";


/**
 * Reads a numeric ID from a text file, increments it by one,
 * writes the updated value back to the file,
 * and returns the previous ID.
 * @returns {Promise<number>} The previous ID value before incrementing
 */


export default async function getId() {

    const path = "../DB/id.txt";

    const id = await read(path);
    
    const updatedId = {"id": id.id + 1}

    await write(path, updatedId)

    return id["id"];
}









