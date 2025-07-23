import crudOperations from "../../DAL/riddles.dal.js";
import {Response} from "../../utils/generalUtils.js";


export async function getAllRiddles(req, res) {

    let response = new Response();
    try {
    response = await crudOperations.readAllRiddles();

    if (response.error) {throw new Error(response.message)}

    return res.send(response.content);

    } catch(error) {
        response.message = error.message;
        return res.send(response.message); 
    }
}



export async function getRiddleById(req, res) {
    
    let response = new Response();

    const id = req.params.id;

    try {
    response = await crudOperations.readRiddleById(id);

    if (response.error) {throw new Error(response.message)}

    return res.send(response.content);

    } catch(error) { 
        response.message = error.message;
        return res.send(response.message);
    }
}




export async function addRiddle(req, res) {
    
    try {
    const riddle = req.body;
    const result = await crudOperations.addRiddle(riddle);
    res.send(result);
    return;

    }catch(error) {res.send(error.message); return}
}


export async function updateRiddle(req, res){
    
    const id = parseInt(req.params.id); 
    const updatedRiddle = req.body;
    
    try {
        const result = await crudOperations.updateRiddleById(id, updatedRiddle)
        res.send(result)
        return;
    } catch(error) {
        res.send({"error - riddles_controlers.js" : error.message}) /////
        return;
    }
}
    

export async function deleteRiddle(req, res) {
  
  
    const id = parseInt(req.params.id);
    
    try {
        const result =  await crudOperations.deleteRiddleById(id)
        res.send(result)
        return;

  } catch (error) {
    res.send({ "error": error.message });
    return;
  }
}


    


    
 
    
    
    