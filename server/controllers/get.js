import { paths } from '../../utils/generalUtils.js'
import read from "../../DAL/read.js"


/**
 * Returns all riddles from the file as JSON.
 * @async
 * @param {object} req - Express request object (not used here).
 * @param {object} res - Express response object used to send all riddles.
 * @returns {void} Sends JSON array of all riddles to the client.
 */
export default async function get(req, res) {

      try {

            const primaryRouting = req.originalUrl.split('/')[1];

            const path = paths[primaryRouting];

            const data = await read(path);
            
            res.send(JSON.stringify(data, null, 2))

      } catch (err) { res.send({ error: err.message }) }
}


