const prompt = require('prompt-sync')();

//Is It The Weekend

console.log("The day of the week is a number from 1 to 7 where 1 is Sunday, 2 is Monday, etc.")
let day = parseFloat(prompt("Enter the day of the week using it's assigned number: "));

function is_it_the_weekend(day){

    if ((day == 1) || (day == 7)){
        return true;
    }
    else {
        return false;
        }
}
console.log("Is it the weekend?")
console.log(is_it_the_weekend(day))

//Even number divisible by nine

let value = parseInt(prompt("Enter a value: "));

function evNineIble(){
    if ((value % 9 == 0) && (value % 2 == 0)){
        return true;
    }
    else{
        return false;
    }
}

console.log("Is the value divisible by 9 and even?");
console.log(evNineIble(value));

//Surface Area of a Cylinder (Medium)

function area_circle(r){
    return (Math.PI * (r * r))
}

function area_label(r, h){
   return (2 * Math.PI * r) * h
}

function area_cylinder(r, h){
    let bases = (area_circle(r)*2)
    let lable = area_label(r, h)
    return (bases + lable).toFixed(2) // .toFixed() is a function that rounds off a decimal number to specific demal places
}

console.log("The total surface are of the cylinder: ")
console.log(area_cylinder(3, 5), "units")

//Creepy Ghosts

function ghost_watch(polter, wolter){ // The mood of the ghosts is represented using a number, 0 being neutral, 1 is laughing, 2 is angry.
   let polter_mood = Math.floor(Math.random() * 3) //Determines what the mood of Polter is.
   let wolter_mood = Math.floor(Math.random() * 3) //Determines what the mood of Wolter is.

if (wolter_mood == polter_mood && (polter_mood == 1 || polter_mood == 2)){
    return true;
} else {
     return false
 } 
}

console.log("Super Secure Containment Facility lockdown status:")
console.log(ghost_watch())