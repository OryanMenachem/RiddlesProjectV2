import { input, colors, timeDecorator } from '../utils/generalUtils.js';
import { sendGetRiddlesByDifficultyRequest } from '../core/services.js';
import Riddle from '../models/Riddle.js';
import { message } from './generalMessage.js';

const DIFFICULTY_LEVELS = ["easy", "medium", "hard"];

export default async function gameFlow(player) {
  const difficulty = inputDifficultyLevel();
  const response = sendGetRiddlesByDifficultyRequest(difficulty);

  if (response.error) {
    return response.message;
  }

  const riddles = response.content;
  askRiddlesAndTrackTime(player, riddles);

  message.displaySuccessMessage();
  player.updateStat();
  player.showStat();

  return player;
}

function inputDifficultyLevel() {
  while (true) {
    const chosenDifficulty = input("Choose difficulty level: easy/medium/hard").toLowerCase();
    if (DIFFICULTY_LEVELS.includes(chosenDifficulty)) {
      return chosenDifficulty;
    }
    console.log(colors.error('\nInvalid choice!'));
  }
}



function askRiddlesAndTrackTime(player, riddles) {
  for (let riddle of riddles) {
    riddle = new Riddle(riddle);
    const riddleTime = timeDecorator(() => riddle.ask());
    player.times.push(riddleTime);
  }
}