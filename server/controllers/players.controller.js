import {addPlayerToDB, getPlayerById, getAllPlayers} from "../../DAL/players.dal.js";
import { Response } from "../../utils/generalUtils.js";

export async function addPlayer(req, res) {
 
    let response = new Response();
    
    try {       
    const playername = req.params.playername;
    response = await addPlayerToDB("players", playername);
    return res.send(response);
      
    } catch(error) {
        response.message = error.message;
        response.error = true;
        return res.send(response)
    }
}


export async function getPlayer(req, res) {

    
    let response = new Response();
    
    try {

    const playerId = req.params.id;
    response = await getPlayerById("players", playerId);      
    return res.send(response);
 
    } catch(error) {

        response.message = error.message;
        response.error = true;
        return res.send(response)
    }
}

export async function getLeaderBoard(req, res) {
 
    let response = new Response();
    
    try {
    response = await getAllPlayers("players");

    if (response.content) {
        let playersInOrder =  response.content;
        playersInOrder.sort((player1, player2) => player1.lowestTime - player2.lowestTime);
        response.content = playersInOrder;
    }
          
    return res.send(response);
 
    } catch(error) {

        response.message = error.message;
        response.error = true;
        return res.send(response)
    }
}