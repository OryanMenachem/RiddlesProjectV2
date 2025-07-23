import express from 'express'; 
import {getAllRiddles, getRiddleById, addRiddle, deleteRiddle, updateRiddle} from "../controllers/ridlles.controller.js";





const router = express.Router();


router.get("/all", getAllRiddles)

router.get("/:id", getRiddleById)

router.post("/add", addRiddle)

router.put("/:id", updateRiddle)

router.delete("/:id", deleteRiddle)

   

export default router;


 
