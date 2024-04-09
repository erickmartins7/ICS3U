const prompt = require('prompt-sync')();

let user_name = prompt("What is your name? ");
let age = prompt("Hello " + user_name + " how old are you? ");  

if (age >= 16){
    console.log("You are old enough to drive.");
}
else{
    console.log("You're not old enough to drive yet.");
}

console.log("1 - Play\n2 - Options\n3 - DLC\n4 - Check for Updates\n5 - Exit");
let selection = parseInt(prompt("Hi " + user_name + ". Please make a selection: "));

if (selection == 1) {
    console.log("Let's play!")
} else if (selection == 2) {
    console.log("You selected Options.")
} else if (selection == 3) {
    console.log("No new DLC at this time.")
} else if (selection == 4) {
    console.log("Everything is up to date.")
} else if (selection == 5){
    console.log("Bye")
} else {
    console.log("Invalid selection.")
}

let time = parseInt(prompt("Enter an hour between 0 and 23 without the minutes "));

if ((time >= 0) && (time <=11)){
    console.log("Good morning!");
}
else if ((time >= 12) && (time <= 17)){
    console.log("Good afternoon!");
}
else if ((time >= 18) && (time <= 23)){
    console.log("Good evening!");
}
else{
    console.log("Invalid hour!")

}

let random_number = Math.random() * 10;    
random_number = Math.floor(random_number);  

if (random_number == 0){
    console.log("The value is zero.")
}
if (random_number % 2 == 0){
    console.log("The value is even.")
}
if ((random_number % 2 == 0) && (random_number % 3 == 0)){
    console.log("The value is divisible by two and three.")
}
function prime(num){
    if (num == 2); return true;// The keyword return signals an exit of the function when if finds a true statement.
    if (num <= 1) return false;
        for (let i = 2; i < num; i++){ // ++ means increment by one
    if (num % i == 0) {
        return false;
    }
}
return true;
}
