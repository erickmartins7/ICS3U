'use strict'
const prompt = require('prompt-sync')(); 

function print_array(arr){
    for (let i = 0; i <= arr.length; i++){
        console.log(arr[i])
    }
}
print_array([56, 34, -99, "Hello", true, "Good bye", 0, -1, 42])

function min(arr){
    return Math.min(...arr)
}
console.log(min([7,2,-4,5,2,9,8,0,1,3,9,-5,-1,5,-1,-8,2,3]))

function longest_string(arr){
    let current_longest = arr[0].length; // This sets the inital length of the longest string with the length of the first string.
    for (let i = 1; i < arr.length; i++){
        if (arr[i].length > current_longest){ // Checks whether current element in the array is greater than the current longest.
            current_longest = arr[i].length
        }
    }
    return current_longest
}
console.log(longest_string(["bicycle", "car", "airplane", "bus", "train", "helicopter", "scooter"]))

let someValues = [1, 2, 3, 4, "hello"];
function contains(arr, value){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === value){ // Checks if array element has 'value'.
            return true
        }
    }
    return false // If it does not, returns false. 
}
console.log(contains(someValues, 2))

let my_array = [7,2,-4,5,2,9,8,0,1,3,9,-5,-1,5,-1,-8,2,3];
function min_max(arr){
    let min = Math.min(...arr) // The ... operator expands the array into each element.
    let max = Math.max(...arr)
    return [min, max]
}
console.log(min_max(my_array))

function sum(arr){
let total = 0
    for (let i = 0; i < arr.length; i++){
        if ((arr[i] === true) || (arr[i] === false)){ // Checks if the element in the array is a "true" or a "false".
                total += Number(arr[i]) // Adds it's value.
        } else if (isNaN(arr[i]) == false){
            total += Number(arr[i]) // If it's a number, add it to the current total.
        }
    }
return total
}
console.log(sum(["Hello", "4", 3, "s'up?", true, false, 2]))

function reverse_strings(arr) {
    let reversedStrings = []; // Array to store reversed strings
    for (let i = 0; i <= arr.length -1; i++) {
        let reversedString = '';  // This empty string stores the reversed characters
        for (let j = arr[i].length - 1; j >= 0; j--) {
            reversedString += arr[i][j]; // Each character is added to reversedString
        }
        reversedStrings.push(reversedString); // .push adds the reversed string to the array
        console.log(reversedString); // prints the reversed strings to the consol
    }


    return reversedStrings; // return the array
}

let my_strings = ["Hello", "Goodbye", "Coding is fun!", "Strings are easy.", "zzzzzzz"];
console.log(reverse_strings(my_strings));
