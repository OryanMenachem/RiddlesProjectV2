import {input} from "../utilsF/utils.js"
import * as colors from "../utilsF/colors.js"
import leaderBoard from './leaderBoard.js'
import sendRequest from '../client/httpRequests.js'
import {createRiddle} from '../server/CRUD/create.js'
import {updateRiddle} from '../server/CRUD/update.js'



let flag = true; // Control flow if the user chooses to exit flag = false

/**
 * Displays a menu and continues prompting the user
 * until a valid choice is made.
 * 
 * If the user's choice is valid, the corresponding function
 * is executed.
 * @async
 */

export default async function menu() {
    
    while(flag) {

        showMenu();

        await choiceHandling(); 
    
    } 
}



function showMenu() {

    console.log('\nChoose one of the following options: \n');
    
    console.log(`${colors.cyan('**************')} MENU ${colors.cyan('**************')}`);
    console.log(`${colors.cyan('* 1.')} Play the game               ${colors.cyan('*')}`);
    console.log(`${colors.cyan('* 2.')} Create a new riddle         ${colors.cyan('*')}`);
    console.log(`${colors.cyan('* 3.')} Read all riddles            ${colors.cyan('*')}`);
    console.log(`${colors.cyan('* 4.')} Update an existing riddle   ${colors.cyan('*')}`);
    console.log(`${colors.cyan('* 5.')} Delete a riddle             ${colors.cyan('*')}`);
    console.log(`${colors.cyan('* 6.')} View leaderboard            ${colors.cyan('*')}`);
    console.log(`${colors.cyan('* 7.')} Exit                        ${colors.cyan('*')}`);
    console.log(colors.cyan('**********************************\n'));

}



/**
 * Receives a selection from the user, 
 * and executes functions accordingly, 
 * @async
 */

async function choiceHandling() {

    const choice = input();
    let result;
    
    switch (choice) {
        case '1':
            break;
            
        case '2':
            result = await handleCreate();
            console.log(result)          
            break;

        case '3':
            result = await handleRead();    
            console.log(result)   
            break;

        case '4':
            result = await handleUpdate();
            console.log(result)   
            break;

        case '5': 
            result = await handleDelete();
            console.log(result)   
            break; 

        case '6':
            await leaderBoard();
            break;

        case '7':
            console.log('\ngood by :)');
            flag = false;
            break;

        default:
            console.log(colors.error('\nOption does not exist!'));
            break;
        }
    }
            
            




const handleCreate = async () => {

    const riddle = createRiddle(); 
    const url = `http://localhost:5000/riddles/add`;
    const method = 'POST';
    const response = await sendRequest(url, method , riddle);

    return JSON.stringify(response, null, 2)
} 

const handleRead = async () => {

    const url = `http://localhost:5000/riddles/all`;
    const method = 'GET';
    const response = await sendRequest(url, method)

    return JSON.stringify(response, null, 2)
}    

const handleUpdate = async () => {

    const id = input('Enter the riddle id');
    const updatedRiddle = await updateRiddle(id)    
    const url = `http://localhost:5000/riddles/${id}`;
    const method = 'PUT';
    const response = await sendRequest(url, method ,updatedRiddle)

    return JSON.stringify(response, null, 2)
}    

const handleDelete = async () => {

    const id = input('Enter the riddle id');
    const url = `http://localhost:5000/riddles/${id}`;
    const method = 'DELETE';
    const response = await sendRequest(url, method);
    
    return JSON.stringify(response, null, 2);

}       