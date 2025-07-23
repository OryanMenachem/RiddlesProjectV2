import express from "express";
import {addPlayer, getPlayer, getLeaderBoard, updateTime} from "../controllers/players.controller.js";


const router = express.Router();


router.get("/leaderboard", getLeaderBoard)

router.get("/:id", getPlayer);

router.post("/submit-score", updateTime)

router.post("/:playername", addPlayer)
 
export default router;



