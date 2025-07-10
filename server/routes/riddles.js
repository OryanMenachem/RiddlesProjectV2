import express from 'express'; 
import { getData, delById } from '../../controllers/riddles.js';





const router = express.Router();


router.get("/all", getData)

router.post("/", (req, res) => {})

router.put("/:id", (req, res) => {})

router.delete("/:id", delById)
   

export default router;


 
