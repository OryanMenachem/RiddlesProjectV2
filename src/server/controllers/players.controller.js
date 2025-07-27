import bcrypt from 'bcrypt';
import * as dal from '../dal/players.dal.js';


export async function handleAddPlayer(req, res) {

    let response;
    try {       
    const {name, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    response = await dal.addPlayer(name, hashedPassword);
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
    
    response = await dal.getPlayerByName(name);    

    if (response.error) {return res.send(response)}

    const player = response.content;
    const isPasswordMatch = await bcrypt.compare(password, player.hashed_password);

    if (isPasswordMatch) {return res.send(response)}

    response.message = "Password or name does not match."
    response.error = true;
    response.content = null;
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



