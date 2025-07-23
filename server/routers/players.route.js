import express from "express";
import {addPlayer, getPlayer, getLeaderBoard} from "../controllers/players.controller.js";


const router = express.Router();


router.get("/leaderboard", getLeaderBoard)

router.get("/:id", getPlayer);

router.post("/submit-score ", (req, res) => {})

router.post("/:playername", addPlayer)
 
export default router;



