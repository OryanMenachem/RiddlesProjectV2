import Player from "../models/Player.js";
import sendHttpRequest from "../../client/httpRequests.js";
import { Response } from "../../utils/generalUtils.js";
import { input } from "../../utils/generalUtils.js";
import gameFlow from "../gameFlow.js";

export async function handleRegister()  {

    let response  = new Response();
    const playername = input("Enter your name:");
    const url = `http://localhost:5000/players/${playername}`;
    const method = 'POST';
    response = await sendHttpRequest(url, method);
    
    if (response.error) { return response; }

    return response;

}

export async function handleGuest ()  {
     
    const playername = input("Enter your name:");
    const player = new Player(playername);
    await gameFlow(player);

}