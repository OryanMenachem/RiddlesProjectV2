import {riddlesCollection} from "../../DB/mongo_connection.js";
// import { ObjectId } from 'mongodb';






/**
 * Retrieves all riddles from the MongoDB collection.
 *
 * @async
 * @returns {Promise<Array|String>} Resolves to an array of riddles if successful,
 * or returns an error message string if an error occurs.
 */

export async function readAllRiddles(req, res) {

    try {
        
        const riddles = await riddlesCollection.find({}).toArray();
        return riddles;
        
      } catch(error) {return {"error" : error.message}}    
  
  }
        

export async function readRiddleById(id) {
  try {

    const riddles = await riddlesCollection.find({}).toArray();
    const riddle = riddles.find(obj => obj.id == id) 

    if (!riddle) { throw new Error("No riddle with such ID was found")}

    return riddle;

  } catch (error) { return {"error":  error.message } }
}
