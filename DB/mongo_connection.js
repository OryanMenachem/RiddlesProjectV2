import { MongoClient } from "mongodb";
import "dotenv/config";


const client = new MongoClient(process.env.MONGO_URI);

export async function startConection() {

    try {
        await client.connect();
        console.log('Connecting to mongo...');
    } catch (error) {
        console.log(error.message)
    }
}
        

/**
 * Closes the MongoDB connection.
 */
export async function closeConnection() {
  try {
    await client.close();
    console.log('MongoDB connection closed');
  } catch (error) {
    console.error('Error closing connection:', error.message);
  }
}



export const db = client.db('riddles_game');

export const riddlesCollection = db.collection('riddles');


