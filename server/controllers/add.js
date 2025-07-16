import { paths } from "../../utils/generalUtils.js";
import read from "../../DAL/read.js"
import write from "../../DAL/write.js";


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

            res.send({ msg: "success" })

      } catch (err) { res.send({ error: err.message }) }
}