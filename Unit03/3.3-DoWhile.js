'use strict'
const prompt = require('prompt-sync')(); 

function negativeOnly(){
    let num;
    do{
        num = parseInt(prompt("Enter a negative number: ")) // Asks user for a negative number.
    }
        while((num >= 0) || (isNaN(num))) // If input is not a negative number, keep asking.
    
}
negativeOnly()

function printOdd(n){
let num = 0;
do{
     while (n > 0){
        num = Number(num)
        n --
     if (num % 2 != 0){
        console.log(num)
        num ++
     } 
     else{
        num ++
    }
    }
}
while (isNaN(n));
}
printOdd(parseInt(prompt("Enter a number: ")))


function parrotUntilQuit(){
let user_text = prompt("Enter some text or the word 'quit': ")
    do{
        while (user_text != 'quit'){ // Keeps prompting until the word entered is 'quit'.
            console.log(user_text)
            user_text = prompt("Enter some text or the word 'quit': ")
        } 
        if (user_text == 'quit'){ 
            console.log("Goodbye!")

            user_text = "done"; // If quit is entered variable is changed so it doesn't repeat itself.
        }
    } 
    while (user_text == 'quit')
}
parrotUntilQuit()


function factorial(n){
    n = parseInt(prompt("Enter a number that you would like the factorial of? "))
    let current_number = 1
    let product = n
  while (current_number < n){ // Continues to multiply with a counter.
    current_number = Number(current_number)
    product = product * current_number
    current_number ++
}
console.log(product)
}

console.log(factorial())