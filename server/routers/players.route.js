import express from "express";
import {addPlayer} from "../controllers/players.controller.js";


const router = express.Router();


router.get("/id", async (req, res) => {});

router.get("/leaderboard", async (req, res) => {})

router.post("/submit-score ", (req, res) => {})

router.post("/:playername", addPlayer)
 
export default router;



