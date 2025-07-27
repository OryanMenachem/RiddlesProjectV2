import riddlesCollection from "../DB/mongo.js";
import {Response} from "../utils/generalUtils.js";

/**
 * Inserts a new riddle document into the 'riddles' collection in MongoDB.
 *
 * Creates a Response object indicating whether the insertion was successful or failed.
 * In case of success, returns a Response with a success message.
 * In case of failure (e.g., exception or insertion not acknowledged), 
 * returns a Response with an error message and sets `error` to true.
 *
 * @async
 * @param {Object} riddle - The riddle object to insert into the database.
 * @returns {Promise<Response>} A Response object with message, error (boolean), and optional content.
 */
export async function addRiddle(riddle) {

  const response = new Response();

  try {
    
    const result = await riddlesCollection.insertOne(riddle);

    if (result.acknowledged) { 
      response.message = "The riddle was added successfully.";
      response.content = result.insertedId;    
      return response
    }

    else { throw new Error("Insertion failed") } 

  } catch (error) {
    response.message = error.message;
    response.error = true;
    return response 
    }
}




/**
 * Retrieves all riddle documents from the 'riddles' collection.
 *
 * Returns a Response object containing the list of riddles on success,
 * or an error message if the operation fails.
 *
 * @returns {Promise<Response>} Response with riddles (in `content`) or error info.
 */

export async function getAllRiddles() {

    const response = new Response();
    
    try {      
        const riddles = await riddlesCollection.find({}).toArray();
        response.message =  "All riddles have been retrieved successfully.";
        response.content = riddles;
        return response;
        
      } catch(error) {
        response.message =  error.message;
        response.error = true;
        return response;
      }    
  
  }
        



/**
 * Retrieves a single riddle by its ID from the 'riddles' collection.
 *
 * Searches through all riddles and returns the one matching the given ID.
 * Returns a Response object with the riddle in `content` on success,
 * or an error message if the riddle is not found or the operation fails.
 *
 * @param {string|number} id - The ID of the riddle to retrieve.
 * @returns {Promise<Response>} Response with the riddle or error info.
 */

export async function getRiddleById(id) {

  const response = new Response();

  try {   
    const riddles = await riddlesCollection.find({}).toArray();
    const riddle = riddles.find(obj => obj.id == id) 

    if (!riddle) {throw new Error("No riddle with such id was found.")}

    response.message = "The riddle was retrieved successfully.";
    response.content = riddle;
    return response;

  } catch (error) {
    response.message = error.message;
    response.error = true;
    return response;
    }
}



  
/**
 * Updates a riddle in the 'riddles' collection by its ID.
 *
 * Applies the fields from `updatedRiddle` to the riddle with the matching ID.
 * Returns a Response object with a success message if updated,
 * or an error message if no matching riddle is found or the operation fails.
 *
 * @param {string|number} id - The ID of the riddle to update.
 * @param {Object} updatedRiddle - An object containing the fields to update.
 * @returns {Promise<Response>} Response indicating success or failure.
 */
export async function updateRiddleById(id, updatedRiddle) {
  
  const response = new Response();
  
    try {
      const result = await riddlesCollection.updateOne(
        { id: id },                     
        { $set: updatedRiddle }          
      );
          
      if (result.matchedCount === 0) { throw new Error("No riddle with such id was found");}

      else {
        response.message = "Riddle updated successfully.";
        return response;}

    } catch (error) {
      response.message = error.message;
      response.error = true;
      return response;
    }
}


/**
 * Deletes a riddle from the 'riddles' collection by its ID.
 *
 * Attempts to delete the riddle with the given ID.
 * Returns a Response object with a success message if deletion occurred,
 * or an error message if no matching riddle is found or if the operation fails.
 *
 * @param {string|number} id - The ID of the riddle to delete.
 * @returns {Promise<Response>} Response indicating success or failure.
 */

export async function deleteRiddleById(id) {

    const response = new Response();

    try {
    const result = await riddlesCollection.deleteOne({ "id": id });

    if (result.deletedCount === 1) {
       response.message = "Riddle deleted successfully.";
       return response; 
      }

    else { throw new Error("No riddle with such id was found")}
    
    } catch (error) {
      response.message = error.message;
      response.error = true;
      return response;
      }
  }


