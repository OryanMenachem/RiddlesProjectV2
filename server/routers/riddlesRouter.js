import express from 'express'; 
// import updateRiddle  from '../controllers/files/update.js';
import {getAllRiddles, getRiddleById, addRiddle, deleteRiddle, updateRiddle} from "../controllers/ridlles_controlers.js"





const router = express.Router();


router.get("/all", getAllRiddles)

router.get("/:id", getRiddleById)

router.post("/add", addRiddle)

router.put("/:id", updateRiddle)

router.delete("/:id", deleteRiddle)

   

export default router;


 
