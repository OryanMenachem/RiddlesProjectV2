import { input, colors } from '../utils/generalUtils.js';
import { handleSignUp, handleGuest, handleLogin } from './services.js';


export default async function mainMenuManager() {
  
    while(true) {       
        showMainMenu(); 
        let choice = input();
        const continueMenu = await handleMainMenuChoice(choice);
        if (!continueMenu) break;   
    } 
}


function showMainMenu() {
    
    console.log('\nChoose one of the following options: \n');
    
    console.log(colors.cyan('╔═══════════════════════════════════╗'));
    console.log(colors.cyan('║') + '                                   ' + colors.cyan('║'));
    console.log(colors.cyan('║') + '  1. Play as Guest                 ' + colors.cyan('║'));
    console.log(colors.cyan('║') + '  2. Sign up                       ' + colors.cyan('║'));
    console.log(colors.cyan('║') + '  3. Login                         ' + colors.cyan('║'));
    console.log(colors.cyan('║') + '  4. Exit                          ' + colors.cyan('║'));
    console.log(colors.cyan('║') + '                                   ' + colors.cyan('║'));
    console.log(colors.cyan('╚═══════════════════════════════════╝') + '\n');
}


export async function handleMainMenuChoice(choice) {

  let result;

  switch (choice) {
    case '1':
      await handleGuest();
      break;
    case '2':
      await handleSignUp();
      break;
    case '3':
      await handleLogin();
      break;
    case '4':
    console.log("good bye :)");
      return false;
    default:
      console.log(colors.error('\nInvalid choice!'));
      break;
  }
  return true;
}
      





