'use strict'
const prompt = require('prompt-sync')(); 

function print_line(){
    function emoji_printer(){ //This is a function within the function that allows the user to choose an emoji
    console.log("Choose your emoji:  1) 😀  2) 😥  3) 😲  4) 😎  5) 😠");
    let emoji_selection = Number(prompt("Enter the number of the emoji that you want: "));
    let input_emoji = "";
        if (emoji_selection == 1){
            input_emoji = "😀";
        }
        else if (emoji_selection == 2){
            input_emoji = "😥";
        }
        else if (emoji_selection == 3){
            input_emoji = "😲";
        }
        else if (emoji_selection == 4){
            input_emoji = "😎";
        }
        else if (emoji_selection == 5){
            input_emoji = "😠";
        }
        else{
            console.log("Invalid selection. ");
        }
    let input = parseInt(prompt("How many emojis would you like to print: "))
    if (input < 0){
        return
    }
    let start = " "
    for (let i = 0; i < input; i++){ // This for loop has a string that is blank and adds an emoji each time the loop completes.
        start += input_emoji
    }
    console.log(start)
}
emoji_printer()
emoji_printer()
}
print_line()


function print_square(){
    console.log("Choose your emoji:  1) 😀  2) 😥  3) 😲  4) 😎  5) 😠");
    let emoji_selection = Number(prompt("Enter the number of the emoji that you want: "));
    let input_emoji = "";
        if (emoji_selection == 1){
            input_emoji = "😀";
        }
        else if (emoji_selection == 2){
            input_emoji = "😥";
        }
        else if (emoji_selection == 3){
            input_emoji = "😲";
        }
        else if (emoji_selection == 4){
            input_emoji = "😎";
        }
        else if (emoji_selection == 5){
            input_emoji = "😠";
        }
        else{
            console.log("Invalid selection. ");
        }
    let input = parseInt(prompt("How big is the square? "))
    if (input < 0){
        return
    }
    let print = "";
        for (let i = 0; i < input; i++){ // This for loop tells how many times to print the rows.
            for (let x = 0; x < input; x++) { // This for loop prints each row
                    print += input_emoji
            }
            print += "\n"; // Prints each row on a new line.
    }
    console.log(print);
}
print_square()

function print_outline(){{}
    console.log("Choose your emoji:  1) 😀  2) 😥  3) 😲  4) 😎  5) 😠");
    let emoji_selection1 = Number(prompt("Enter the number of the emoji that you want to outline the square with: "));
    let outlineEmoji = "";
        if (emoji_selection1 == 1){
            outlineEmoji = "😀";
        }
        else if (emoji_selection1 == 2){
            outlineEmoji = "😥";
        }
        else if (emoji_selection1 == 3){
            outlineEmoji = "😲";
        }
        else if (emoji_selection1 == 4){
            outlineEmoji = "😎";
        }
        else if (emoji_selection1 == 5){
            outlineEmoji = "😠";
        }
        else{
            console.log("Invalid selection. ");
        }
    let emoji_selection2 = prompt("Enter the emoji for the middle of the square: ");
    let middleEmoji = "";
    if (emoji_selection2 == 1){
        middleEmoji = "😀";
    }
    else if (emoji_selection2 == 2){
        middleEmoji = "😥";
    }
    else if (emoji_selection2 == 3){
        middleEmoji = "😲";
    }
    else if (emoji_selection2 == 4){
        middleEmoji = "😎";
    }
    else if (emoji_selection2 == 5){
        middleEmoji = "😠";
    }
    else{
        console.log("Invalid selection. ");
    }
    let size = parseInt(prompt("Enter the size of the square: "));
    if (size < 0){
        return
    }
    let square = "";
    for (let i = 0; i < size; i++) { 
        for (let j = 0; j < size; j++) {
            if (i === 0 || i === size - 1 || j === 0 || j === size - 1) { // If the current position is on th eedge of the square, it adds the outline emoji. Otherwise, it adds the middle emoji.
                square += outlineEmoji + " ";
            } else {
                square += middleEmoji + " ";
            }
        }
        square += "\n";
    }
    
    console.log(square);
}
print_outline()


function print_diamond() {
    let mid = Number(prompt("How many emojis in the middle row of the diamond? ")); // The middle row of the diamond
    let emoji = "⚽";
    let space = " ";

    for (let i = 0; i < mid; i++) {
        let space_num = mid - i - 1; // This is the number of spaces that should be printed before the emoji.
        let emoji_num = i + 1; // This tells how many emojis to print. 
        console.log(space.repeat(space_num) + emoji.repeat(emoji_num)); // .repeat is a function that I learned about from W3Schools. It returns a string with a number of copies of a string.
    }
    for (let i = mid - 1; i > 0; i--) { // To print the bottom of the diamond, the for loop is decreasing.
        let space_num = mid - i; 
        let emoji_num = i; 
        console.log(space.repeat(space_num) + emoji.repeat(emoji_num));
    }
}
print_diamond();