import {input, colors} from "../../utils/generalUtils.js";
import {handleRegister, handleGuest} from "../menus/loginMenu.services.js"
import gameFlow from "../gameFlow.js";




export default async function loginMenu() {
    let flag = true;
    while(flag) { 
        showLoginMenu(); 
        let choice = input();
        flag = await handleLoginMenuChoice(choice); // flag => Control flow if the user chooses to exit flag = false       
    } 
}


function showLoginMenu() {

    console.log('\nChoose one of the following options: \n');
    
    console.log(`${colors.cyan('**************')} MENU ${colors.cyan('**************')}`);
    console.log(`${colors.cyan('* 1.')} Play as Guest               ${colors.cyan('*')}`);
    console.log(`${colors.cyan('* 2.')} Register                    ${colors.cyan('*')}`);
    console.log(`${colors.cyan('* 3.')} Login                       ${colors.cyan('*')}`);
    console.log(`${colors.cyan('* 4.')} Exit                        ${colors.cyan('*')}`);    
    console.log(colors.cyan('**********************************\n'));
}


export async function handleLoginMenuChoice(choice) {
  let result;
  switch (choice) {
    case '1':
      await handleGuest();
      break;
    case '2':
      break;
    case '3':
      result = await handleRegister();
      console.log(JSON.stringify(result, null, 2));
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
      





