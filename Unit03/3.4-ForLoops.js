'use strict'
const prompt = require('prompt-sync')(); 

function countUp(start, stop){
    for (let i = start; i <= stop; i ++){
        console.log(i)
    }
}
countUp(5, 18)

function countDown(start, stop){
    for (let i = start; i >= stop; i --){
        console.log(i)
    }
}
countDown(18, 5)

function sum(n){
n = parseInt(prompt("Enter a number: "))
let total = 0
    for(let i = 0; i <= n; i ++){
        total += i;
    }
    return total
}
console.log(sum(7))

let begin = parseInt(prompt("Enter a start value: "))
let end = parseInt(prompt("Enter an end value: "))
function count4(begin, end){
let total = 0
    for(let i = begin; i <= end; i ++){
        if (i % 4 == 0){
            total ++;
        } 
    }
    return ("There are " + total + " values divisible by 4 between the values you entered.");
}
console.log(count4(begin, end))

let n = parseInt(prompt("Enter the end number: "))
let x = parseInt(prompt("Enter the divisor: "))
function sum_divisible(n, x){
let sum = 0
    for(let i = 0; i <= n; i ++){
        if (i % x == 0){
            sum += i
        }
    }
    return sum
}
console.log(sum_divisible(n, x))