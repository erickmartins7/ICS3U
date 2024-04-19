const prompt = require('prompt-sync')();

function whoAreYou() {
    let id = prompt("What is your name? ");
    let age = prompt("What is your age? ");
    let hobby = prompt("What is your favourite hobby? ");
}
whoAreYou ();
console.log("Hello, " + id + "you are " + age +  "years old and your favourite hobby is " + hobby +"!")

function tax_calculator(dollars){
    let principle = prompt("How much is your pre-tax amount of money? ")
    console.log("The value with tax added is ","$"+ principle*1.13)
}

function calculator(operator) {
    let num1 = parseFloat(prompt("Enter the first number: "));
    let num2 = parseFloat(prompt("Enter the second number: "));

    let result = eval(num1 + operator + num2);

    console.log("Result:", result);
}

calculator('*'); 

function pythagorean(legA, legB, hypotenuse) {
    if (hypotenuse == false) {
        return Math.sqrt(legA * legA + legB * legB);
    } else {
        if (legA == false) {
            return Math.sqrt(hypotenuse * hypotenuse - legB * legB);
        } 
        else if (legB == false) {
            return Math.sqrt(hypotenuse * hypotenuse - legA * legA);
        } 
        else {
            return "Only one side cna be missing :)";
        }
    }
}