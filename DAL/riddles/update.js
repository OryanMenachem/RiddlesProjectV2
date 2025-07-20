import { riddlesCollection } from "../../DB/mongo_connection.js";

  

export async function updateRiddleById(id, updatedRiddle) {
 
  try {
    
      
    const result = await riddlesCollection.updateOne(
      { id: id },                     
      { $set: updatedRiddle }          
    );
    
    
    if (result.matchedCount === 0) {
      return { message: "No riddle found with that ID." };
    } else {
      return { message: "Riddle updated successfully." };
    }

  } catch (error) {
    return { error: error.message };
  }
}
