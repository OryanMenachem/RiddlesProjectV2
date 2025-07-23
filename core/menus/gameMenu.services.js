import {createRiddle} from "../CRUD/riddles.js";
import {updateRiddle} from "../CRUD/riddles.js";
import sendHttpRequest from "../../client/httpRequests.js";
import { input } from "../../utils/generalUtils.js";




async function sendCreateRiddleRequest() {

    const riddle = createRiddle();
    const url = `http://localhost:5000/riddles/add`;
    const method = 'POST';
    const response = await sendHttpRequest(url, method , riddle);
    
    return response
} 

export async function sendReadAllRiddlesRequest()  {

    const url = `http://localhost:5000/riddles/all`;
    const method = 'GET';
    const response = await sendHttpRequest(url, method)
    
    return response
}    

async function sendUpdateRiddleRequest() {

    const id = input('Enter the riddle id');
    let url = `http://localhost:5000/riddles/${id}`;
    let method = 'GET';
    let riddle = await sendHttpRequest(url, method)    
    
    if (riddle.error) {return riddle.error}
    
    riddle = await updateRiddle(riddle);
    url = `http://localhost:5000/riddles/${id}`;
    method = 'PUT';
    const response = await sendHttpRequest(url, method, riddle)
   
    return response
}    

async function sendDeleteRiddleRequest() {

    const id = input('Enter the riddle id');
    const url = `http://localhost:5000/riddles/${id}`;
    const method = 'DELETE';
    const response = await sendHttpRequest(url, method);
    
    return response

}

export const riddlesCrud = {
    create : sendCreateRiddleRequest,
    read : sendReadAllRiddlesRequest,
    update : sendUpdateRiddleRequest,
    delete : sendDeleteRiddleRequest
}