import Player from "./models/Player.js";
import sendHttpRequest from "../client/httpRequests.js";
import { input } from "../utils/generalUtils.js";
import gameFlow from "./gameFlow.js";



export async function handleGuest ()  {     

    const name = input("Enter your name:");
    const player = new Player(name);
    await gameFlow(player);

}



export async function handleSignUp()  {

    const name = input("Enter your name:");
    const password = input("Enter a password:");
    const body = {name, password}
    const url = `http://localhost:5000/players/addPlayer`;
    const method = 'POST';
    const response = await sendHttpRequest(url, method, body);
    return response;

}

export async function handleLogin()  {

    const name = input("Enter your name:");
    const password = input("Enter your password:");
    const url = `http://localhost:5000/players/login/${name}/${password}`;
    const method = 'GET';
    let response = await sendHttpRequest(url, method);
    
    if (response.error) {return response}
    
    let player = response.content;
    player = new Player(player.id, player.name, player.best_time)
    player = await gameFlow(player);
    response = await handleSubmitTime(player.id, player.best_time);
    return response;


}


export async function handleSubmitTime(id, best_time)  {

    const body = {id, best_time}
    const url = `http://localhost:5000/players/submitTime`;
    const method = 'POST';
    const response = await sendHttpRequest(url, method, body);
    return response;

}
