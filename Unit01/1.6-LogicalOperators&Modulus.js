const prompt = require('prompt-sync')();

let user_input = prompt("Do you want to play a game? (y/n): ");

if ((user_input == "y") || (user_input == "")){
    console.log("Time to play.")
}
else{
    console.log("Please make a proper selection")
}

let num1 = prompt("Enter a number: ");
num1 = Number(num1)
if (num1 > 10 && num1 < 50){
    console.log("Your next number should be greater than 50.")
}
else{
    console.log("Your next number should be greater than 50.")
}

let num2 = prompt("Enter a number: ");
num2 = Number(num2)
if (num2 % 2 == 0){
    console.log("Your next number should be odd.")
}
else if (num2 % 2 != 0){
    console.log("Your next number should be even.")
}

let num3 = prompt("Enter a number: ");
num3 = Number(num3)

let sum = num1 + num2 + num3
if ((sum + 1) % 10 == 0){
    console.log("Your numbers are Squirrelly.")
}
else {
    console.log("Your numbers are not Squirrelly.")
}
if ((num1 % 3 == 0) && (num2 % 3 == 0) || (num1 % 3 == 0) && (num3 % 3 == 0) || (num2 % 3 == 0) && (num3 % 3 == 0)){
    console.log("Your numbers are Jazzy.")
}
else {
    console.log("Your numbers are not Jazzy.")
}