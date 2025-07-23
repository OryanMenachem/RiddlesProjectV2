import readlineSync from 'readline-sync';

export function showMenu() {
  console.log('\nPlease choose one of the following options:');
  console.log('1. Play as Guest');
  console.log('2. Register');
  console.log('3. Login');
}

// Function 2: Handle the user's choice
export function handleMenuChoice() {
  const choice = readlineSync.question('\nEnter your choice number: ');

  switch (choice) {
    case '1':
      console.log('\nYou chose to play as a guest.');
      return 'guest';
    case '2':
      console.log('\nYou chose to register.');
      return 'register';
    case '3':
      console.log('\nYou chose to login.');
      return 'login';
    default:
      console.log('\nInvalid choice. Please try again.');
      showMenu();
      return handleMenuChoice(); // Recursive call for retry
  }
}


