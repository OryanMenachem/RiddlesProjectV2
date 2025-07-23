import express from "express";
import {addPlayer, getPlayer} from "../controllers/players.controller.js";


const router = express.Router();


router.get("/:id", getPlayer);

router.get("/leaderboard", (req, res) => {})

router.post("/submit-score ", (req, res) => {})

router.post("/:playername", addPlayer)
 
export default router;



