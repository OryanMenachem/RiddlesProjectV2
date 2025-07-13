import {input} from '../utils/utils.js'
import getId from "../utils/idGenerator.js";
import * as colors from '../utils/colors.js'
import read from '../DAL/read.js'

const path = "C:/Users/om316/OneDrive/Desktop/JavaScript/Projects/RiddlesProjectV2/DB/riddles.txt"

export function createRiddle() {

    const riddle =   {

        "id": getId(),
        "category": input('Enter the category of the riddle'),
        "difficulty": input('Enter the difficulty level of the riddle'),
        "riddleDescription": input('Enter the description of the riddle'),
        "correctAnswer": input('Enter the correct answer to the riddle')
  }

  return riddle
}

/**
 * @async
 * @param {*} id 
 * @returns 
 */
export async function updateRiddle(id) {

  const data = await read(path)

  const riddle =  data.filter((obj) => obj.id == id)[0]

    
  if (!riddle) {return JSON.stringify({msg: colors.error("No riddle with such ID was found")}, null, 2)}

  let choice;

  for(const key in riddle) {

    if (key == "id") {continue;}

    while (true) {

    choice = input(`Would you like to change the '${key}' field? (y/n)`)  

    if (choice == 'y') {riddle[key] = input('Update this field'); break;}

    else if (choice == 'n') {break;}

    console.log(colors.error("\nYour selection is invalid.\n"));
    

    }

  }

  return riddle;
}




