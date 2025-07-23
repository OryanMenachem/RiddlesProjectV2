import crudOperations from "../../DAL/players.dal.js";
import { Response } from "../../utils/generalUtils.js";

export async function addPlayer(req, res) {
 
    let response = new Response();
    
    try {       
    const playername = req.params.playername;
    response = await crudOperations.addPlayer("players", playername);
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
    response = await crudOperations.getPlayerById("players", playerId);      
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
    response = await crudOperations.getAllPlayers("players");

    if (response.content) {
        let sortedPlayers =  response.content;
        sortedPlayers.sort(
            (player1, player2) => player1.lowestTime - player2.lowestTime
        );
        response.content = sortedPlayers;
    }
          
    return res.send(response);
 
    } catch(error) {

        response.message = error.message;
        response.error = true;
        return res.send(response)
    }
}

export async function updateTime(req, res) {
   
    let response = new Response();  
    try {
    const {playerId, best_time } = req.body;
    response = await crudOperations.best_timeUpdate("players", playerId, best_time);      
    return res.send(response);
 
    } catch(error) {
        response.message = error.message;
        response.error = true;
        return res.send(response)
    }
}