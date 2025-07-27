import { input, colors, timeDecorator } from '../utils/generalUtils.js';

import { sendGetRiddlesByDifficultyRequest } from '../core/services.js';
import Riddle from '../models/Riddle.js';
import { message } from './generalMessage.js';

export default async function gameFlow(player) {
  
  const difficultyLevel = inputDifficultyLevel();
  const response = await sendGetRiddlesByDifficultyRequest(difficultyLevel);

  if (response.error) {return response.message}
  
  let riddles = response.content;
  
  for (let riddle of riddles) {
      riddle = new Riddle(riddle);
      const time = timeDecorator(() => riddle.ask())
      player.times.push(time);
   } 

    message.displaySuccessMessage();
    player.updateStat();
    player.showStat();
    
    return player;   
}


function inputDifficultyLevel() {

  while(true) {

    const levels = ["easy", "medium", "hard"];
    let difficultyLevel = input("Choose difficulty level: easy/medium/hard");
    if (levels.includes(difficultyLevel.toLowerCase())) {return difficultyLevel}
    console.log(colors.error('\nInvalid choice!'));

  }
}