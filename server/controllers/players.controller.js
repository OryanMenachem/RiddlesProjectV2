import * as dal from "../../DAL/players.dal.js";




export async function handleAddPlayer(req, res) {

    let response;
    try {       
    const {name, password} = req.body;
    response = await dal.addPlayer(name, password);
    return res.send(response);
      
    } catch(error) {
        response.message = error.message;
        response.error = true;
        return res.send(response)
    }
}


export async function handleGetPlayerByCredentials(req, res) {

    let response;

    try {
    const name = req.params.name;
    const password = req.params.password;
    response = await dal.getPlayerByCredentials(name, password);      
    return res.send(response);
 
    } catch(error) {
        response.message = error.message;
        response.error = true;
        return res.send(response)
    }
}

export async function handleGetTopTen(req, res) {
 
    let response;
    
    try {
    response = await dal.getTopTen();
    return res.send(response);
 
    } catch(error) {
        response.message = error.message;
        response.error = true;
        return res.send(response)
    }
}

export async function handleUpdateBestTime(req, res) {
   
    let response;  
    try {
    const {id, best_time} = req.body;
    response = await dal.updateBestTime(id, best_time);      
    return res.send(response);
 
    } catch(error) {
        response.message = error.message;
        response.error = true;
        return res.send(response)
    }
}



