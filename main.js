#! /usr/bin/env node
import inquirer from "inquirer";
//1. Computer will generate a random number.
//2. User will input for guessing the number.
//3. Compare User input and computer generated input and show results.
let condition = true;
while (condition) {
    const RandomNumber = Math.floor(Math.random() * 6 + 1);
    console.log("$A Random Number Has Been Generated. The Range is 1-6 !!! Try to Guess The Right Number!!!$");
    const answer = await inquirer.prompt([{
            name: "UserGuessedNumber",
            type: "number",
            message: "Please guess a number in the range 1-6:  "
        }]);
    if (answer.UserGuessedNumber === RandomNumber) {
        console.log("Congratulations!!! You guessed the right number.");
    }
    else {
        console.log("Better luck next time, you guessed the wrong number.");
    }
    let ConfirmationMessage = await inquirer.prompt([{
            name: "confirmation",
            type: "confirm",
            message: "Do you want to continue?",
            default: "true",
        }]);
    condition = ConfirmationMessage.confirmation;
}
