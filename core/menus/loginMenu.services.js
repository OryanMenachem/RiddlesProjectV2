import Player from "../models/Player.js";
import sendHttpRequest from "../../client/httpRequests.js";
import { Response } from "../../utils/generalUtils.js";
import { input } from "../../utils/generalUtils.js";
import gameFlow from "../gameFlow.js";



export async function handleGuest ()  {     

    const playername = input("Enter your name:");
    const player = new Player(playername);
    await gameFlow(player);

}


export async function handleRegister()  {

    let response  = new Response();
    const playername = input("Enter your name:");
    const url = `http://localhost:5000/players/${playername}`;
    const method = 'POST';
    response = await sendHttpRequest(url, method);
    return response;

}

export async function handleLogin()  {

    let response  = new Response();
    const id = input("Enter your id:");
    const url = `http://localhost:5000/players/${id}`;
    const method = 'GET';
    response = await sendHttpRequest(url, method);
    console.log(response);/////
    return response;

}

