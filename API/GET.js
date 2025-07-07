import read from '../DAL/read.js';


const path = "C:/Users/om316/OneDrive/Desktop/JavaScript/Projects/RiddlesProjectV2/DB/riddles.txt"

/**
 * Sends the entire contents of the database to the client as a JSON response.
 * @param {object} req - The request object
 * @param {object} res - The response object
 */


export default async function get(req, res) {

    let data = await read(path);

    data = JSON.stringify(data, null, 2);

    res.end(data)
}

