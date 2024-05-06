/** / 3.1 - While Loops
* Author: Erick Martins
* Lesson link: 
**/

'use strict'
const prompt = require('prompt-sync')(); 

//task 1
let str = prompt("Enter a word that you wish to reverse: ");
function reverse(str){
  let word_reverse = " "
  let current_letter = str.length - 1
  while (current_letter >= 0) {
    word_reverse += (str[current_letter]);
    current_letter--;
  }
  console.log(word_reverse)
}
reverse(str)

//task 2
function dragons_and_goblins(str){
  let current_letter = 0
  let dragons = 0
  let goblins = 0
  while (current_letter < str.length){
    if (str.charCodeAt(current_letter) == 100){
      dragons += 1
      current_letter ++
    } else if (str.charCodeAt(current_letter) == 103){
      goblins += 1
      current_letter ++
    } else {
      current_letter ++
    }
  }
  console.log("Dragons: " + dragons, "Goblins: " + goblins)
}
dragons_and_goblins("dbhfghfgdbchdnwjdg")

//task 3
function add(str){
  let current_letter = 0
  while (current_letter < str.length){
    
  }
}
