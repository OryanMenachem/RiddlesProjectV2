import {input} from '../utils/utils.js'
import getId from "../utils/idGenerator.js";

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


export function updateRiddle(riddle) {

  let choice;

  for(const key in riddle) {

    if (key == "id") {continue;}

    while (true) {

    choice = input(`Would you like to change the '${key}' field? (y/n)`)  
    if (choice == 'y') {riddle[key] = input('Update this field'); break;}
    else if (choice == 'n') {break;}

    }

  }
  

  return riddle
}




