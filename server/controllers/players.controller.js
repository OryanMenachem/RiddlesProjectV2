import {addPlayerToDB} from "../../DAL/players.dal.js";
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