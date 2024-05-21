/** / 3.2 - Strings and Loops
* Author: Erick Martins
* Lesson link: 
**/

'use strict'
const prompt = require('prompt-sync')(); 

//task 1
let str = prompt("Enter a word that you wish to reverse: ");
function reverse(str){
  let word_reverse = " "
  let current_letter = str.length - 1 // Sets the last letter of the string as the current letter.
  while (current_letter >= 0) {
    word_reverse += (str[current_letter]); // Adds the letter in reverse order to the final word.
    current_letter--;
  }
  console.log(word_reverse) // Prints the final word
}
reverse(str)

//task 2
function dragons_and_goblins(str){
  let current_letter = 0
  let dragons = 0
  let goblins = 0
  while (current_letter < str.length + 1){
    if (str.charCodeAt(current_letter) == 100){ // This checks whether the current letter is a "d" using the code for "d".
      dragons += 1 // If so, it adds one to "d".
      current_letter ++
    } else if (str.charCodeAt(current_letter) == 103){ // This checks whether the current letter is a "g" using the code for "g".
      goblins += 1 // If so, it adds one to "g".
      current_letter ++
    } else {
      current_letter ++
    }
  }
  console.log("Dragons: " + dragons, "Goblins: " + goblins) // Prints the.
}
dragons_and_goblins("dbhfghfgdbchdnwjdg")

//task 3
function add(str){
  let current_number = 0
  let sum = 0
  while (current_number < str.length){
    sum += Number(str[current_number]);
    current_number++
  }
  return sum
}
console.log(add("1259"))

//task 4 
function add_subtract(str) {
  let total = 0;

  for (let i = 0; i < str.length; i++) {
      if (str[i] != '-') { // Checks whether current character is a minus sign.
        total += parseInt(str[i]); // Adds value to total

      } else if (str[i] == "-") { // Check if the character is a digit
        i++
        total -= parseInt(str[i]); // Subtracts value from total.
      }
  }

  console.log(total);
}
console.log(add_subtract("543-36-9"));