const prompt = require('prompt-sync')();

let user_input = prompt("Do you want to play a game? (y/n): ");

if (user_input == y){
    let num1 = prompt("Enter a number: ");
}
if (num1 > 10 && num1 < 50){
    console.log("Your next number should be greater than 50.")
}

let num2 = prompt("Enter a number: ");
if (num2 % 2 == 0){
    console.log("Your next number should be odd.")
}
else if (num2 % 2 != 0){
    console.log("Your next number should be even.")
}

let num3 = prompt("Enter a number: ");