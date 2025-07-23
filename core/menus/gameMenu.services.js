import {createRiddle} from "../CRUD/riddles.js";
import {updateRiddle} from "../CRUD/riddles.js";
import sendHttpRequest from "../../client/httpRequests.js";
import { input, colors } from "../../utils/generalUtils.js";





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


async function sendGetLeaderBoard()  {

    let response  = new Response();
    const url = `http://localhost:5000/players/leaderboard`;
    const method = 'GET';
    response = await sendHttpRequest(url, method);
    return response.content;

}





/**
 * Shows a leaderboard of players sorted by their fastest time.
 * Reads players from a file, sorts them, and prints the list to the console.
 * @async
 * @returns {Promise<void>}
 */

export function  displayLeaderBoard(players) {

    console.log(colors.cyan("\n************************"));
    console.log(            "      Leader board        ");
    console.log(colors.cyan("************************"));

    players.forEach((player, i) => {

        const rank = colors.cyan(i + 1)
        const name = player.username.padEnd(8);
        const sec = player.best_time;
        const space = colors.cyan('-'.padEnd(4))

        console.log(`${rank}. ${name} ${space} ${sec} sec\n`);
    })
    
    console.log(colors.cyan("************************\n"));
}
        
       

export const riddlesCrud = {
    create : sendCreateRiddleRequest,
    read : sendReadAllRiddlesRequest,
    update : sendUpdateRiddleRequest,
    delete : sendDeleteRiddleRequest,
    leaderBoard : sendGetLeaderBoard
}