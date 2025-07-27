import express from 'express';

import * as handleRequests from '../controllers/ridlles.controller.js';


const router = express.Router();


router.get("/all", handleRequests.handleGetAllRiddles)

router.get("/:difficulty", handleRequests.handleGetRiddlesByDifficulty)

router.get("/:id", handleRequests.handleGetRiddleById)

router.post("/add", handleRequests.handleAddRiddle)

router.put("/:id", handleRequests.handleUpdateRiddle)

router.delete("/:id", handleRequests.handleDeleteRiddle)

   

export default router;


 
