import express from "express";
import * as handleRequests from "../controllers/players.controller.js";


const router = express.Router();

router.get("/leaderboard", handleRequests.handleGetTopTen)

router.get("/login/:name/:password", handleRequests.handleGetPlayerByCredentials);

router.post("/submitTime", handleRequests.handleUpdateBestTime)

router.post("/addPlayer", handleRequests.handleAddPlayer)
 
export default router;



