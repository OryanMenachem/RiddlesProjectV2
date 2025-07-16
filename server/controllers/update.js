import read from '../../DAL/read.js'
import write from "../../DAL/write.js"
import { paths } from "../../utils/generalUtils.js";




/**
 * Updates an existing object using the ID and new data from the request body.
 * @async
 * @param {object} req - Express request object containing updated object data in req.body.
 * @param {object} res - Express response object used to send confirmation or error.
 * @returns {void} Sends confirmation message if update is successful, or error message.
 */
export default async function update(req, res) {

      try {
        
      const primaryRouting = req.originalUrl.split('/')[1];

      const path = paths[primaryRouting]; 

      const updatedObject = req.body;
      
      const data = await read(path)

      const index = data.findIndex(obj => obj.id === updatedObject.id);
     
      data[index] = updatedObject;    //Object.assign(data[index], updatedRiddle);     

      await write(path, data);

      res.send({ msg : "The object was successfully updated." })

      } catch(err) {res.send({error : err.message})}


}