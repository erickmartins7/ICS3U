const prompt = require('prompt-sync')();

let age = prompt("What is your age? ");

if (age >= 50){
console.log("You qualify for the senior discount!");
}
else if (age <= 16){
console.log("You're not old enough to drive yet.");
}

let user_name = prompt("What is your name? ");

if (user_name == "Mr. J"){
    console.log("🐠");
 }

 let name = user_name
 let length = name.length

 if (length > 7){
    console.log("You have a long name.");
 }

 let characters = prompt("How many characters long is your name? ");

 if (characters == length){
    console.log("That's correct! ✔️");
 }
else if (characters > length){
    console.log("Too high ✖️");
}
else if (characters < length){
    console.log("Too low ✖️");
}

if (age % 2 == 0 ){
    console.log("Your age is an even number.");
}
else{
    console.log("Your age is an odd number.");
}