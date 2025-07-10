import express from 'express';
import read from '../../DAL/read.js'

const path = "C:/Users/om316/OneDrive/Desktop/JavaScript/Projects/RiddlesProjectV2/DB/players.txt"

const router = express.Router();


router.get("/all", async (req, res) => {

    const data = await read(path)
    
    res.send(JSON.stringify(data, null, 2))
})

router.post("/", (req, res) => {})

router.put("/:id", (req, res) => {})
 
export default router;