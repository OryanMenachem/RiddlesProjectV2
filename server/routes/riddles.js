import express from 'express'; 
import { getAllRiddles,  addRiddle, updateRiddle, delRiddleById} from '../controllers/riddles.js';





const router = express.Router();


router.get("/all", getAllRiddles)

router.post("/add", addRiddle)

router.put("/:id", updateRiddle)

router.delete("/:id", delRiddleById)
   

export default router;


 
