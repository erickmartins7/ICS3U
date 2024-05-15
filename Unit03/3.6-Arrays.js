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
        if (arr[i].length > current_longest){
            current_longest = arr[i].length
        }
    }
    return current_longest
}
console.log(longest_string(["bicycle", "car", "airplane", "bus", "train", "helicopter", "scooter"]))

let someValues = [1, 2, 3, 4, "hello"];
function contains(arr, value){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === value){
            return true
        }
    }
    return false
}
console.log(contains(someValues, 2))

let my_array = [7,2,-4,5,2,9,8,0,1,3,9,-5,-1,5,-1,-8,2,3];
function min_max(arr){
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    return [min, max]
}
console.log(min_max(my_array))

function sum(arr){
let total = 0
    for (let i = 0; i < arr.length; i++){
        if ((arr[i] === true) || (arr[i] === false)){
                total += Number(arr[i])
        } else if (isNaN(arr[i]) == false){
            total += Number(arr[i])
        }
    }
return total
}
console.log(sum(["Hello", "4", 3, "s'up?", true, false, 2]))

function reverse_strings(arr){

}

