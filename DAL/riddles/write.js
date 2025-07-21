import {riddlesCollection} from "../../DB/mongo_connection.js";



/**
 * Inserts a new riddle document into the 'riddles' collection in MongoDB.
 *
 * Returns a success message if the insertion is acknowledged.
 * If insertion fails, catches the error and returns an error message string.
 *
 * @async
 * @param {Object} riddle - The riddle object to insert into the database.
 * @returns {Promise<string>} A success or error message string.
 */


export async function insertRiddleToMongo(riddle) {
  try {
    // console.log(riddle);
    
    const result = await riddlesCollection.insertOne(riddle);

    if (result.acknowledged) {
    
      return {message: "The riddle was added successfully."};
    } else {
      throw new Error('Insertion failed without acknowledgment');
    }

  } catch (error) {

    return {"error": `Error writing riddle: ${error.message}`};
  }
}
 
