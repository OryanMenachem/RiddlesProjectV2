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
    
    const border = colors.cyan('║');
    console.log('\nChoose one of the following options: \n'); 
    console.log(colors.cyan('╔═══════════════════════════════════╗'));
    console.log(border + '                                   ' + border);
    console.log(border + '  1. Play as Guest                 ' + border);
    console.log(border + '  2. Sign up                       ' + border);
    console.log(border + '  3. Login                         ' + border);
    console.log(border + '  4. Exit                          ' + border);
    console.log(border + '                                   ' + border);
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
      





