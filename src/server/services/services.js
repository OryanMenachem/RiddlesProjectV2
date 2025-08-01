import sendHttpRequest from '../../client/httpRequests.js';
import { input, colors } from '../utils/generalUtils.js';
import getId from '../utils/idGenerator.js';
import Player from '../models/Player.js';
import gameFlow from '../core/gameFlow.js';
import playerManager from '../core/playerManu.js';
import adminManager from '../core/adminManu.js';

export async function handleGuest ()  {     

    const name = input("Enter your name:");
    const player = new Player(name);
    await gameFlow(player);

}



export async function handleSignUp()  {

    const name = input("Enter your name:");
    const password = input("Enter a password:");
    const body = {name, password}
    const url = `http://localhost:5000/players/addPlayer`;
    const method = 'POST';
    const response = await sendHttpRequest(url, method, body);
    
    console.log(response.message);
}

export async function handleLogin()  {

    let result;

    let response = await sendGetPlayerByCredentialsRequest();
    
    if (response.error) {
        console.log(response.message);
        return;
    }
    
    let player = response.content;

    if (player.role == "admin") {
        result = await adminManager(player);
    }
    else if (player.role == "player") {
        result = await playerManager(player);
    }
     
}


export async function sendGetPlayerByCredentialsRequest() {

    const name = input("Enter your name:");
    const password = input("Enter your password:");
    const url = `http://localhost:5000/players/login/${name}/${password}`;
    const method = 'GET';
    const response = await sendHttpRequest(url, method);
    return response;
}

export async function handleSubmitTime(id, best_time)  {

    const body = {id, best_time}
    const url = `http://localhost:5000/players/submitTime`;
    const method = 'POST';
    const response = await sendHttpRequest(url, method, body);

    console.log(response.message);

}


export async function sendAddRiddleRequest() {

    const riddle = createRiddle();
    const url = `http://localhost:5000/riddles/add`;
    const method = 'POST';
    const response = await sendHttpRequest(url, method , riddle);
    console.log(response.message);
} 

/**
 * Creates a new riddle object using user input.
 * Prompts the user to enter details like category, difficulty, description, and answer.
 * @returns {Object} A riddle object with id, category, difficulty, description, and correct answer.
 */

export function createRiddle() {

    const riddle =   {
        id : getId(),
        category : input('Enter the category of the riddle'),
        difficulty : input('Enter the difficulty level of the riddle'),
        riddleDescription : input('Enter the description of the riddle'),
        correctAnswer : input('Enter the correct answer to the riddle')
  }
  return riddle
}

export async function sendGetAllRiddlesRequest()  {

    const url = `http://localhost:5000/riddles/all`;
    const method = 'GET';
    const response = await sendHttpRequest(url, method);
    const riddles = response.content;
    console.log(JSON.stringify(riddles,null,2));
    
}

export async function sendGetRiddlesByDifficultyRequest(difficulty)  {

    const url = `http://localhost:5000/riddles/difficulty/${difficulty}`;
    const method = 'GET';
    const response = await sendHttpRequest(url, method);
    return response;
} 

export async function sendUpdateRiddleRequest() {

    const id = input('Enter the riddle id');
    let url = `http://localhost:5000/riddles/${id}`;
    let method = 'GET';
    let response = await sendHttpRequest(url, method)    
    
    if (response.error) {return response.message}
    console.log(response);
    
    let riddle = response.content;
    riddle = await updateRiddle(riddle);

    url = `http://localhost:5000/riddles/${id}`;
    method = 'PUT';
    response = await sendHttpRequest(url, method, riddle)
    return response
}    

export async function updateRiddle(riddle) {
  
  for (const key in riddle) {

    if (key == "_id" || key == "id") {
      delete riddle[key];
      continue;
    }

    let answer;
    while (true) {
      answer = input(`Would you like to change the '${key}' field? (y/n)`);

      if (answer === "y") {
        riddle[key] = input('Update this field');
        break;
      } else if (answer === "n") {
        break;
      } else {
        console.log(colors.error("\nInvalid input. Please enter 'y' or 'n'.\n"));
      }
    }

  }
  return riddle;
}

  

export async function sendDeleteRiddleRequest() {

    const id = input('Enter the riddle id');
    const url = `http://localhost:5000/riddles/${id}`;
    const method = 'DELETE';
    const response = await sendHttpRequest(url, method);  
    return response

}

export async function handleGetTopTen()  {

    const url = `http://localhost:5000/players/topTen`;
    const method = 'GET';
    const response = await sendHttpRequest(url, method);
    if (response.error) {return response}
    const topTen = response.content;
    showTopTen(topTen);
}





/**
 * Prints the top 10 players sorted by best time.
 * @param {Array} players - Array of player objects with 'name' and 'best_time'.
 */
function showTopTen(players) {

    console.log(colors.cyan("\n************************"));
    console.log(            "           TOP TEN        ");
    console.log(colors.cyan("************************"));

    players.forEach((player, i) => {
        const rank = colors.cyan(i + 1)
        const name = player.name.padEnd(8);
        const sec = player.best_time;
        const space = colors.cyan('-'.padEnd(4))
        console.log(`${rank}. ${name} ${space} ${sec} sec\n`);
    })
    console.log(colors.cyan("************************\n"));
}
        
       