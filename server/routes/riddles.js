import express from 'express'; 
import { getAllRiddles,  addRiddle, update, delRiddleById} from '../controllers/riddles.js';





const router = express.Router();


router.get("/all", getAllRiddles)

router.post("/add", addRiddle)

router.put("/:id", update)

router.delete("/:id", delRiddleById)
   

export default router;


 
