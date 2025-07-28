import express from 'express';
import * as handleRequests from '../controllers/players.controller.js';


const router = express.Router();

router.get("/topTen", handleRequests.getTopTenController)

router.get("/login/:name/:password", handleRequests.getPlayerByCredentialsController);

router.post("/submitTime", handleRequests.updateBestTimeController)

router.post("/addPlayer", handleRequests.addPlayerController)
 
export default router;



