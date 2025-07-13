import read from '../../DAL/read.js'
import write from "../../DAL/write.js"
import { paths, input } from "../../utilsF/utils.js";
import * as colors from "../../utilsF/colors.js"

/**
 * Updates fields of a riddle object by asking the user which fields to change.
 * 
 * @async
 * @param {number} id - The ID of the riddle to update.
 * @returns {Promise<Object|undefined>} The updated riddle object, or undefined if no riddle was found.
 */

export async function updateRiddle(id) {

  const riddle = await read(paths.riddles, id)

  if (!riddle) {return}

  let choice;

  for(const key in riddle) {

    if (key == "id") {continue;}

    while (true) {

    choice = input(`Would you like to change the '${key}' field? (y/n)`)  

    if (choice == 'y') {riddle[key] = input('Update this field'); break;}

    else if (choice == 'n') {break;}

    console.log(colors.error("\nYour selection is invalid.\n"));
    

    }

  }

  return riddle;
}


/**
 * Updates an existing riddle using the ID and new data from the request body.
 * @async
 * @param {object} req - Express request object containing updated riddle data in req.body.
 * @param {object} res - Express response object used to send confirmation or error.
 * @returns {void} Sends confirmation message if update is successful, or error message.
 */
export default async function update(req, res) {

      try {
        
      const primaryRouting = req.originalUrl.split('/')[1];

      const path = paths[primaryRouting]; 

      const updatedRiddle = req.body;
      
      const data = await read(path)

      const index = data.findIndex(obj => obj.id === updatedRiddle.id);
     
      data[index] = updatedRiddle;    //Object.assign(data[index], updatedRiddle);     

      await write(path, data);

      res.send({ msg : "The riddle was successfully updated." })

      } catch(err) {res.send({error : err.message})}


}