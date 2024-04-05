#! usr/bin/env node
import inquirer from "inquirer";
//1. Computer will generate a random number.
//2. User will input for guessing the number.
//3. Compare User input and computer generated input and show results.
const RandonNumber = Math.floor(Math.random() * 6 + 1);
console.log("$A Random Number Has Been Generated. The Range is 1-6 !!! Try to Guess The Right Number!!!$");
const answer = await inquirer.prompt([{
        name: "UserGuessedNumber",
        type: "number",
        message: "Please guess a number in the range 1-6:  "
    }]);
if (answer.UserGuessedNumber === RandonNumber) {
    console.log("Congratulations!!! You guessed the right number.");
}
else {
    console.log("Better luck next time, you guessed the wrong number.");
}
