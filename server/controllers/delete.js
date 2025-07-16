import read from "../../DAL/read.js";
import write from "../../DAL/write.js";
import { paths } from "../../utils/generalUtils.js";

/**
 * Deletes a riddle by its ID, which is received from the request URL.
 * @async
 * @param {object} req - Express request object containing riddle ID in req.params.id.
 * @param {object} res - Express response object used to send result message.
 * @returns {void} Sends message confirming deletion or saying riddle not found.
 */

export default async function del(req, res) {

      try { 
        
      const primaryRouting = req.originalUrl.split('/')[1];

      const path = paths[primaryRouting];
      
      const id = parseInt(req.params.id);

      const data = await read(path)

      const updatedData = data.filter((obj) => obj.id != id)  //Creates a new array without the riddle with the given ID

      if (updatedData.length == data.length) { res.send({msg : "No riddle with such ID was found"})}

      await write(path, updatedData)

      res.send({msg : "The riddle was successfully deleted"})

      } catch(err) {res.send({error : err.message})}
}