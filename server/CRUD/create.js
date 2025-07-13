import {input, paths } from "../../utilsF/utils.js";
import read from "../../DAL/read.js"
import write from "../../DAL/write.js";
import getId from "../../utilsF/idGenerator.js"

/**
 * Creates a new riddle object using user input.
 * Prompts the user to enter details like category, difficulty, description, and answer.
 * @returns {Object} A riddle object with id, category, difficulty, description, and correct answer.
 */

export function createRiddle() {

    const riddle =   {

        "id": getId(),
        "category": input('Enter the category of the riddle'),
        "difficulty": input('Enter the difficulty level of the riddle'),
        "riddleDescription": input('Enter the description of the riddle'),
        "correctAnswer": input('Enter the correct answer to the riddle')
  }
  
  return riddle
}


/**
 * Adds a new object to the file from the request body.
 * @async
 * @param {object} req - Express request object containing the new object in req.body.
 * @param {object} res - Express response object used to send success message or error.
 * @returns {void} Sends success message if the object is added, or error if failed.
 */
export default async function post(req, res) {

      try {
      
      const primaryRouting = req.originalUrl.split('/')[1];

      const path = paths[primaryRouting];
  
      const data = await read(path)

      data.push(req.body)

      await write(path, data)

      res.send({ msg : "success" })

      } catch(err) {res.send({error : err.message})}
}