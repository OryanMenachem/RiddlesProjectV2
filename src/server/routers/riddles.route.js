import express from 'express';
import * as handleRequests from '../controllers/ridlles.controller.js';

const router = express.Router();


router.get("/all", handleRequests.getAllRiddlesController)

router.get("/:id", handleRequests.getRiddleByIdController)

router.get("/difficulty/:difficulty", handleRequests.getRiddlesByDifficultyController)

router.post("/add", handleRequests.addRiddleController)

router.put("/:id", handleRequests.updateRiddleController)

router.delete("/:id", handleRequests.deleteRiddleController)


   

export default router;


 
