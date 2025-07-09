import read from '../DAL/read.js';
import * as colors from '../design/colors.js';




/**
 * Displays a sorted leaderboard of players based on their lowest time.
 * Reads player data from a local file, sorts them from fastest to slowest,
 * and prints a formatted leaderboard to the console.
 * @async
 * @returns {Promise<void>}
 */

export async function  leaderBoard() {

    const path = "C:/Users/om316/OneDrive/Desktop/JavaScript/Projects/RiddlesProjectV2/DB/player.txt"

    let players = await read(path);
    
    players =  players.slice().sort((player1, player2) => player1.lowestTime - player2.lowestTime);

    console.log(colors.cyan("******************"));
                console.log(`   Leader board    `);
    console.log(colors.cyan("******************"));

    players.forEach((player, i) => {

        console.log(`${colors.cyan(i + 1)}. ${player.name}     ${colors.cyan(`-`)}     ${player.lowestTime}\n`);
    })
    
    console.log(colors.cyan("******************\n"));
}
        
       
    
    
    
 


    



