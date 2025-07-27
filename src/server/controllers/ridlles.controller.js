import * as dal from '../dal/riddles.dal.js';


export async function  handleGetAllRiddles(req, res) {

    let response;

    try {
    response = await dal.getAllRiddles();
    return res.send(response);

    } catch(error) {
        response.message = error.message;
        response.error = true;
        return res.send(response); 
    }
}


export async function  handleGetRiddlesByDifficulty(req, res) {

    let response;
    
    try {
    const difficulty = req.params.difficulty;
    response = await dal.getRiddlesByDifficulty(difficulty);
    return res.send(response);

    } catch(error) {
        response.message = error.message;
        response.error = true;
        return res.send(response); 
    }
}

    



export async function handleGetRiddleById(req, res) {
    
    let response;
    try {
    const id = req.params.id;
    response = await dal.getRiddleById(id);
    return res.send(response);

    } catch(error) { 
        response.message = error.message;
        response.error = true;
        return res.send(response);
    }
}




export async function handleAddRiddle(req, res) {
    
    let response;
    
    try {
    const riddle = req.body;
    response = await dal.addRiddle(riddle);
    return res.send(response)

    }catch(error) {
        response.message = error.message;
        response.error = true;
        return res.send(response);
    }
}


export async function handleUpdateRiddle(req, res){
    
    let response;
    
    try {
        const id = parseInt(req.params.id); 
        const updatedRiddle = req.body;
        response = await dal.updateRiddleById(id, updatedRiddle)
        return res.send(response)

    } catch(error) {
        response.message = error.message;
        response.error = true;
        return res.send(response);
    }
}
    

export async function handleDeleteRiddle(req, res) {
  
    let response;
    
    try {
        const id = parseInt(req.params.id);
        response =  await dal.deleteRiddleById(id)
        return res.send(result)
        
  } catch (error) {
    response.message = error.message;
    response.error = true;
    return res.send(response);
  }
}


    


    
 
    
    
    