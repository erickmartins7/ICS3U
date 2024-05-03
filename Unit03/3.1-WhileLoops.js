/** / 3.1 - While Loops
* Author: Erick Martins
* Lesson link: https://github.com/ics-ASH/3-1-while-loops-erickmartins7
**/

'use strict'
const prompt = require('prompt-sync')(); 

function countdown(){
    let start = 10
    let stop = 0
    let count = 0;
    while (start > stop){
        console.log(start);
        start--;
        count++;
    }
    console.log(count)
} 
countdown()

//task 2 

let min = 1;
let max = 20


function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
randInt(min, max);

let stop = randInt(min, max)

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
    let random_num = randInt(min, max);
    console.log(random_num)

    while (random_num != stop){
        return stop;
    }
}
random_until(min, max, stop)
