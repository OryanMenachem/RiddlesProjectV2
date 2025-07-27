import sendHttpRequest from "../../client/httpRequests.js";
import { input, colors } from "../../utils/generalUtils.js";
import getId from "../../utils/idGenerator.js";


async function sendCreateRiddleRequest() {

    const riddle = createRiddle();
    const url = `http://localhost:5000/riddles/add`;
    const method = 'POST';
    const response = await sendHttpRequest(url, method , riddle);
    return response
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

export async function sendReadAllRiddlesRequest()  {

    const url = `http://localhost:5000/riddles/all`;
    const method = 'GET';
    const response = await sendHttpRequest(url, method);
    return response;
}    

async function sendUpdateRiddleRequest() {

    const id = input('Enter the riddle id');
    let url = `http://localhost:5000/riddles/${id}`;
    let method = 'GET';
    let response = await sendHttpRequest(url, method)    
    
    if (response.error) {return response.message}

    let riddle = response.content;
    riddle = await updateRiddle(riddle);

    url = `http://localhost:5000/riddles/${id}`;
    method = 'PUT';
    response = await sendHttpRequest(url, method, riddle)
    return response
}    

export async function updateRiddle(riddle) {
  
  for(const key in riddle) {

    if (key == "_id") {delete riddle[key]; continue;}
    else if (key == "id") {delete riddle[key]; continue;}

    let answer;
    while (true) {
    answer = input(`Would you like to change the '${key}' field? (y/n)`);
    if (answer === "y") riddle[key] = input('Update this field');
    else if (answer === "n") break;
    console.log(colors.error("\nInvalid input. Please enter 'y' or 'n'.\n"));
    }

  }
  return riddle;
}
  

async function sendDeleteRiddleRequest() {

    const id = input('Enter the riddle id');
    const url = `http://localhost:5000/riddles/${id}`;
    const method = 'DELETE';
    const response = await sendHttpRequest(url, method);  
    return response

}


async function sendGetLeaderBoard()  {

    const url = `http://localhost:5000/players/leaderboard`;
    const method = 'GET';
    const response = await sendHttpRequest(url, method);
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
        const name = player.name.padEnd(8);
        const sec = player.best_time;
        const space = colors.cyan('-'.padEnd(4))

        console.log(`${rank}. ${name} ${space} ${sec} sec\n`);
    })
    
    console.log(colors.cyan("************************\n"));
}
        
       

export const riddlesOperations = {
    sendCreateRiddleRequest,
    sendReadAllRiddlesRequest,
    sendUpdateRiddleRequest,
    sendDeleteRiddleRequest,
    sendGetLeaderBoard
}