const prompt = require('prompt-sync')();

console.log("1.4 - User Input");
let year = prompt("What year were you born? ");
console.log("You entered", + year );
let age = 2024 - year;
console.log("You are likely", + age + " years old" );
let name = prompt("What is your name? ");
console.log("Hi, " + name + "."," You were born in", + year + " and you are likely", + age + " years old.");
let x = name.length
console.log("Your name is " + x + " letters long.");
let temp1 = prompt("Enter a temperature in fahrenheit. ");
console.log("Your temperature in celsius is " + ((temp1 - 32)*(5/9)))
