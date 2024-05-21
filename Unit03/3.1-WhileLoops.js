/** / 3.1 - While Loops
* Author: Erick Martins
* Lesson link: https://github.com/ics-ASH/3-1-while-loops-erickmartins7
**/

'use strict'
const prompt = require('prompt-sync')(); 

function countdown(start, stop){
    let count = 0;
    if (start < stop){
        return -1
    }
    while (start > stop){
        console.log(start);
        start--;
        count++;
    }
    return(count) // This returns the number of time the while loop looped.
} 
console.log(countdown(10, 0)) // console.log allows you to the see return value.

//task 2 

let min = 0;  // Setting min and max
let max = 20


function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
randInt(min, max);
let stop = randInt(min, max) // Assigning a random stop value


function random_until(min, max, stop){
    if (max > min){
    }
    else{
        return -1;
    }
    if ((stop >= min) && (stop <= max)){
    } 
    else{    
    return -1;
    }
    randInt(min, max)
    let random_num = randInt(min, max); // Letting the random number be assigned a variable
    console.log("The random number is: ",random_num)

    while (random_num != stop){  
        randInt(min, max);
        random_num = randInt(min, max);
        console.log(random_num) // Continues printing random numbers within range until the stop value is printed
    }
    return stop;
}
random_until(min, max, stop)
console.log(stop)

//task 3

function average(n){
    let count = 1
    let sum = 0
    while (count < n + 1){ // Loop continues until the count reachs the n value. It is n + 1 so it counts n itself
        let input = parseInt(prompt("Please enter value "+ count+"/"+n +" > "))
        sum += input // Adds each user input to a variable
        count++
    }
    let avg = sum / n
    return avg
}

console.log("The average is", average(5))