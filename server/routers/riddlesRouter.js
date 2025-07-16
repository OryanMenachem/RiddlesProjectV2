import express from 'express'; 
import getAllRiddles from '../controllers/get.js';
import addRiddle from '../controllers/add.js';
import updateRiddle  from '../controllers/update.js';
import delRiddle from '../controllers/delete.js'




const router = express.Router();


router.get("/all", getAllRiddles)

router.post("/add", addRiddle)

router.put("/:id", updateRiddle)

router.delete("/:id", delRiddle)
   

export default router;


 
