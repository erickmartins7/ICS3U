const prompt = require('prompt-sync')();

function whoAreYou() {
    let id = prompt("What is your name? ");
    let age = prompt("What is your age? ");
    let hobby = prompt("What is your favourite hobby? ");
    console.log("Hello, " + id + " you are " + age +  " years old and your favourite hobby is " + hobby +"!")
}
whoAreYou ();


function tax_calculator(dollars){
    let principle = prompt("How much is your pre-tax amount of money? ")
    principle = Number(principle)
    let tax = principle*0.13
    console.log("The value with tax added is ","$"+ (principle + tax))
}
tax_calculator()

function calculator(operator) {
    let num1 = parseFloat(prompt("Enter the first number: "));
    let num2 = parseFloat(prompt("Enter the second number: "));
    let operation = prompt("Which operation would you like to perform? Enter either + for addition, - for subtraction, * for multiplication, or / for division.")
    
    let sum = (num1 + num2)
    let difference = (num1 - num2)
    let product = (num1 * num2)
    let quotient = (num1 / num2)

    if (operation == "+"){
    console.log(num1 + "+" + num2 + "=" + sum );
    }

    else if (operation == "-"){
    console.log(num1 + "-" + num2 + "=" + difference );
    }

    else if (operation == "*"){
    console.log(num1 + "*" + num2 + "=" + product );
    }

    else if (operation == "/"){
    console.log(num1 + "/" + num2 + "=" + quotient );
    }

    else{
        console.log("Please enter a valid operator.")
    }
}

calculator(); 

function pythagorean(legA, legB, hypotenuse) {
    if (hypotenuse == false) {
        console.log(Math.sqrt(legA * legA + legB * legB));
    } else if (legA == false) {
            console.log(Math.sqrt(hypotenuse * hypotenuse - legB * legB));
        } 
        else if (legB == false) {
            console.log(Math.sqrt(hypotenuse * hypotenuse - legA * legA));
        } 
        else {
            return "Only one side can be missing :";
        }
}


pythagorean(3, 4, false)