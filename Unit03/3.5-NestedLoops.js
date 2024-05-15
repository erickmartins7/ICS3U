'use strict'
const prompt = require('prompt-sync')(); 

function print_line(){
    function emoji_printer(){
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
    let count = 0
    let start = " "
    while (count < input){
        start += input_emoji
        count ++
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
        for (let i = 0; i < input; i++){
            for (let x = 0; x < input; x++) {
                    print += input_emoji
            }
            print += "\n";
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
            if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
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

