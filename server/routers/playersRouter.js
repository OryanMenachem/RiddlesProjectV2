import express from 'express';
import read from '../../DAL/files/read.js'
import { paths } from "../../utils/generalUtils.js";

const router = express.Router();


router.get("/all", async (req, res) => {

    const data = await read(paths.players)
    
    res.send(JSON.stringify(data, null, 2))
})

router.post("/", (req, res) => {})

router.put("/:id", (req, res) => {})
 
export default router;