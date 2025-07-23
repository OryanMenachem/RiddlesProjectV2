import {input, colors} from "../../utils/generalUtils.js";

export default async function menu() {
    
    while(flag) { 

        showAuthMenu(); 
        let choice = input();
        await handleAuthMenuChoice(choice); 
        
    } 
}


export function showAuthMenu() {

    console.log('\nChoose one of the following options: \n');
    
    console.log(colors.cyan('**********************************\n'));
    console.log(`${colors.cyan('* 1.')} Play as Guest               ${colors.cyan('*')}`);
    console.log(`${colors.cyan('* 2.')} Register                    ${colors.cyan('*')}`);
    console.log(`${colors.cyan('* 3.')} Login                       ${colors.cyan('*')}`);  
    console.log(colors.cyan('**********************************\n'));
}


export async function handleAuthMenuChoice(choice) {

  switch (choice) {
    case '1':
      return;
    case '2':
      return;
    case '3':
      return;
    default:
      console.log('\nInvalid choice. Please try again.');
      return;
  }
}
