import {readAllRiddles, readRiddleById} from "../../DAL/riddles/read.js";
import {insertRiddleToMongo } from "../../DAL/riddles/write.js";
import {deleteRiddleById} from "../../DAL/riddles/delete.js";
import {updateRiddleById} from "../../DAL/riddles/update.js"


export async function getAllRiddles(req, res) {

    try {
    const riddles = await readAllRiddles();
    res.send(riddles);
    return;

    }catch(error) {res.send(error.message); return}
}



export async function getRiddleById(req, res) {

    const id = req.params.id;
    try {
    const riddle = await readRiddleById(id);
    res.send(riddle);
    return;

    }catch(error) {res.send(error.message); return}
}

export async function addRiddle(req, res) {

    try {
    const riddle = req.body;
    const result = await insertRiddleToMongo(riddle);
    res.send(result);
    return;

    }catch(error) {res.send(error.message); return}
}


export async function updateRiddle(req, res){
    
    const id = parseInt(req.params.id); 
    const updatedRiddle = req.body;
    
    try {
        const result = await updateRiddleById(id, updatedRiddle)
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
        const result =  await deleteRiddleById(id)
        res.send(result)
        return;

  } catch (error) {
    res.send({ "error": error.message });
    return;
  }
}


    


    
 
    
    
    