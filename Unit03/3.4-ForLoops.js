'use strict'
const prompt = require('prompt-sync')(); 

function countUp(start, stop){
    for (let i = start; i <= stop; i ++){ // for loop allows i to be incremented by one until it reaches the stop value
        console.log(i) // Prints i to the console.
    }
}
countUp(5, 18)

function countDown(start, stop){
    for (let i = start; i >= stop; i --){ // for loops allows i to be decreased by one until is reaches the stop value.
        console.log(i) // Prints i to the console.
    }
}
countDown(18, 5)

function sum(n){
n = parseInt(prompt("Enter a number: "))
let total = 0
    for(let i = 0; i <= n; i ++){ // Starts at zero, adds i until the nth value.
        total += i; // Adds i to the current total.
    }
    return total
}
console.log(sum(7))

let begin = parseInt(prompt("Enter a start value: "))
let end = parseInt(prompt("Enter an end value: "))
function count4(begin, end){
let total = 0
    for(let i = begin; i <= end; i ++){
        if (i % 4 == 0){ // Checks if i is divisible by 4.
            total ++; // If so, adds to the current total
        } 
    }
    return ("There are " + total + " value(s) divisible by 4 between the values you entered.");
}
console.log(count4(begin, end))

let n = parseInt(prompt("Enter the end number: "))
let x = parseInt(prompt("Enter the divisor: "))
function sum_divisible(n, x){
let sum = 0
    for(let i = 0; i <= n; i ++){ 
        if (i % x == 0){ // Checks if i is divisible by x.
            sum += i // If so, adds to current sum
        }
    }
    return sum
}
console.log(sum_divisible(n, x))