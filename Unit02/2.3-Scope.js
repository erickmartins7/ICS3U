const prompt = require('prompt-sync')();

/*
Unit 2 Lesson 3: Basic understanding of scope

Author's Name: Erick Martins
*/

//Testing scope
function addition(x, y, z){
    let sum = x + y + z
    if (sum < 100){
    console.log(sum," is less than 100. ")//The variable sum is still accessible within the function.
    }
    return sum

}
console.log("Your sum", addition(1, 2, 3))

//When this function is called, it gives an error due to incorrect scope.
function subtraction(x, y, z){
    let difference = x + y + z
    if (difference < 100){
    console.log(difference," is less than 100. ")
    }
    return difference

}
//      console.log(difference)      The variable difference is not defined outside of the function which causes an error.


//Operation Plumber

let waterTemp = "cold"; // Moved outside of the function

function waterBoilerSwitch(){ //Moved this function to the top so the switch turns on first to boil the cold water.
    if (waterTemp == "cold") {
      waterTemp = "hot";
      return true;
    } else {
      waterTemp = "cold";
      return false;
    }
  }

function hotWater() {
  
  if (waterBoilerSwitch() == false){
    waterBoilerSwitch();
    
  }
  return waterTemp;
}

console.log(hotWater()); //Moved to the bottom