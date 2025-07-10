import {input} from '../utils/utils.js'
import getId from "../utils/idGenerator.js";

export default function createRiddle() {

    const riddle =   {

        "id": getId(),
        "category": input('Enter the category of the riddle'),
        "difficulty": input('Enter the difficulty level of the riddle'),
        "riddleDescription": input('Enter the description of the riddle'),
        "correctAnswer": input('Enter the correct answer to the riddle')
  }

  return riddle
}





