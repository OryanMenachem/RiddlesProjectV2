import read from "../DAL/read.js";
import { paths, colors } from "../utils/generalUtils.js";



/**
 
 * Shows a leaderboard of players sorted by their fastest time.
 * Reads players from a file, sorts them, and prints the list to the console.
 * @async
 * @returns {Promise<void>}
 */

export default async function  displayLeaderBoard() {

    let players = await read(paths.players);
    
    players.sort((player1, player2) => player1.lowestTime - player2.lowestTime);

    console.log(colors.cyan("\n************************"));
    console.log(            "      Leader board        ");
    console.log(colors.cyan("************************"));

    players.forEach((player, i) => {

        const rank = colors.cyan(i + 1)
        const name = player.name.padEnd(8);
        const sec = player.lowestTime;
        const space = colors.cyan('-'.padEnd(4))

        console.log(`${rank}. ${name} ${space} ${sec} sec\n`);
    })
    
    console.log(colors.cyan("************************\n"));
}
        
       

    
    
 


    



