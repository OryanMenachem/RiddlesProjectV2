import { riddlesCollection } from "../../DB/mongo_connection.js";


export async function deleteRiddleById(id) {
    
    try {
        
    const result = await riddlesCollection.deleteOne({ "id": id });
    
    if (result.deletedCount === 1) { return {message: "Riddle deleted successfully." }} 

    else { return {message: "No riddle found with that ID." } }
    
  } catch (error) { return { "error": error.message }; }
}