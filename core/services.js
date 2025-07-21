import {createRiddle} from "./CRUD/create.js";
import {updateRiddle} from "./CRUD/update.js";
import sendHttpRequest from "../client/httpRequests.js";
import { input } from "../utils/generalUtils.js";
import leaderBoard from './leaderBoard.js';



const handleCreate = async () => {

    const riddle = createRiddle(); 
    const url = `http://localhost:5000/riddles/add`;
    const method = 'POST';
    const response = await sendHttpRequest(url, method , riddle);

    return JSON.stringify(response, null, 2)
} 

const handleRead = async () => {

    const url = `http://localhost:5000/riddles/all`;
    const method = 'GET';
    const response = await sendHttpRequest(url, method)
    
    return JSON.stringify(response, null, 2)
}    

const handleUpdate = async () => {

    const id = input('Enter the riddle id');
    let url = `http://localhost:5000/riddles/${id}`;
    let method = 'GET';
    let riddle = await sendHttpRequest(url, method)    

    riddle = await updateRiddle(riddle);
    url = `http://localhost:5000/riddles/${id}`;
    method = 'PUT';
    const response = await sendHttpRequest(url, method, riddle)
   
    return JSON.stringify(response, null, 2)
}    

const handleDelete = async () => {

    const id = input('Enter the riddle id');
    const url = `http://localhost:5000/riddles/${id}`;
    const method = 'DELETE';
    const response = await sendHttpRequest(url, method);
    
    return JSON.stringify(response, null, 2);

}

export const handleMenu = {
    create : handleCreate,
    read : handleRead,
    update : handleUpdate,
    delete : handleDelete,
    leaderBoard : leaderBoard
}