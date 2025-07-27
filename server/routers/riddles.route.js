import express from 'express'; 
import  * as handleRequests  from "../controllers/ridlles.controller.js";





const router = express.Router();


router.get("/all", handleRequests.getAllRiddles)

router.get("/:id", handleRequests.getRiddleById)

router.post("/add", handleRequests.addRiddle)

router.put("/:id", handleRequests.updateRiddle)

router.delete("/:id", handleRequests.deleteRiddle)

   

export default router;


 
