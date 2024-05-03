const prompt = require('prompt-sync')();

console.log("The day of the week is a number from 1 to 7 where 1 is Sunday, 2 is Monday, etc.")
let day = parseFloat(prompt("Enter the day of the week using it's assigned number: "));

function is_it_the_weekend(day){
    if (day == 1 || 7){
    console.log("It is the weekend.")}
        return true;
}
    else if (day == 2 || 3 || 4 || 5 || 6){{
    console.log("It is not the weekend.")}
        return false;
}


function area_circle(r){

}