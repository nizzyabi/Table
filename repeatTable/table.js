const prompt = require('prompt-sync')();

function table() {
  let parsedInt, userInput2;
  
  while (true) {
    let userInput1 = prompt('Please pick a number between 1 and 100: ');
    userInput2 = prompt('Select a letter or icon to make tablize: ');

    parsedInt = parseInt(userInput1);

    if (isNaN(parsedInt) || parsedInt <= 0 || parsedInt >= 100) {
      console.log('Please select a valid number between 1 and 100.');
    } else if (userInput2.length !== 1) {
      console.log('Please enter only one letter or icon.');
    } else {
      break; // Exit the loop if valid inputs are received
    }
  }

  for (let i = 1; i <= parsedInt; i++) {
    const addedLettersTable = userInput2.repeat(i)
    console.log(addedLettersTable)
  }
}

table();








