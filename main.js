#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number
// 2) user input for guessing number
// 3) Compare user input with computer generated number and show result
const randomNumber = 13;
const asnwers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-15: ",
    }
]);
if (asnwers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed right number.");
}
else {
    console.log("You guessed wrong number.");
}
