const prompt = require('prompt-sync')();

let temp = prompt("Enter a temperature like 30C or 120F: ");
let caps = temp.toUpperCase();
let last_letter = caps[caps.length - 1];
num_temp = parseInt(temp)

if (last_letter == "F"){
    calctempF = (num_temp - 32)*(5/9)
    finaltempF = Math.round(calctempF * 10)/10;
    console.log(finaltempF + "C")
}
else if (last_letter == "C"){
    calctempC = (num_temp)*(9/5) + 32
    finaltempC = Math.round(calctempC * 10)/10;
    console.log(finaltempC + "F")
}
else{
    console.log("Error!")
}