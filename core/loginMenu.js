import {input, colors} from "../utils/generalUtils.js";
import {handleSignUp , handleGuest, handleLogin} from "./loginMenu.services.js"





export default async function loginMenu() {
  
    while(true) {       
        showLoginMenu(); 
        let choice = input();
        const shouldContinue = await handleLoginMenuChoice(choice);
        if (!shouldContinue) break;   
    } 
}


function showLoginMenu() {
    
    console.log('\nChoose one of the following options: \n');
    
    console.log(`${colors.cyan('**************')} LOGIN ${colors.cyan('**************')}`);
    console.log(`${colors.cyan('* 1.')} Play as Guest                  ${colors.cyan('*')}`);
    console.log(`${colors.cyan('* 2.')} Sign up                        ${colors.cyan('*')}`);
    console.log(`${colors.cyan('* 3.')} Login                          ${colors.cyan('*')}`);
    console.log(`${colors.cyan('* 4.')} Exit                           ${colors.cyan('*')}`);    
    console.log(colors.cyan('*************************************\n'));
}


export async function handleLoginMenuChoice(choice) {

  let result;

  switch (choice) {
    case '1':
      result = await handleGuest();
      break;
    case '2':
      result = await handleSignUp();
      break;
    case '3':
      result = await handleLogin();
      break;
    case '4':
    console.log("good bye :)");
      return false;
    default:
      console.log(colors.error('\nInvalid choice!'));
      return true;
  }
  
  console.log(JSON.stringify(result, null, 2));
  return true;
}
      





