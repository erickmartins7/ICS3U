/**
 *  ICS3UC - Mr. Jamieson 🐠
 *  Review of Unit 2 - Functions
 *
 *  Read the README carefully - don't assume you know what is expected.
 * 
 *  Author: 
 */

'use strict';

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Return a random letter from 'alphabet'
function random_alpha() {
   let random_letter = randInt(0, alphabet.length - 1);
   return alphabet[random_letter]
}
console.log(random_alpha())

// Return a concatonated string
function concat(str1, str2) {
   let full_sentence = str1 + str2
   return (full_sentence)
}

console.log(concat("This is the first part", "and this is the second."))

/* Return the difference from num2 to num1 */
function delta(num1, num2) {
   return num1 - num2
}
console.log(delta(5, 3))

/* Return the hypotenuse of a right-triangle
   rounded to 5 decimal places  */
function pythag(a, b) {
   let hyp = Math.sqrt(a * a + b * b).toFixed(5) //.tofixed() rounds to a specific amount of decimal places
   hyp = Number(hyp)
   return hyp                                   // Math.sqrt is the function for square root
}
console.log(pythag(3, 6))

// Return the area of a rectangle
function area_rectangle(l, w) {
   return l * w
}
console.log(area_rectangle(3, 4))

/* Return the surface area of a rectangular prism
   Hint: you could use your areaRectangle function */
function area_rect_prism(l, w, h) {
   let topbottom_faces = area_rectangle(l, w) * 2
   let lateral_faces = (w * h * 2) + (l * h * 2)
   return topbottom_faces + lateral_faces
}
console.log(area_rect_prism(3, 4, 5))

/* Return the slope, rounded to the nearest tenth 
   Use your delta() function */
function slope(x1, y1, x2, y2) {
   return ((y2 - y1)/(x2 - x1)).toFixed(1)
}
console.log(slope(3, 6, 5, 9))

/* Return the linear distance from point A to B rounded to the nearest tenth 
   Use your delta() and pythag() functions */
function distance(x1, y1, x2, y2) {
   let dx = delta(x2, x1); // Calculate delta x
   let dy = delta(y2, y1); // Calculate delta y
   let linear_distance = pythag(dx, dy).toFixed(1); // Calculate linear distance using Pythagorean theorem
   return linear_distance;
}
console.log(distance(3, 4, 5, 9))

// Return the specific letter (or -1)
function specific_letter(str, index) {
   if ((index >= str.length) || (index < 0)){
      return -1
   }  else {
   return str[index]
   }
}
console.log(specific_letter("Erick", 0))

// Return whether or not the given password contains an uppercase letter
function contains_uppercase(password) {
   let password_lower = password.toLowerCase()
   if (password == password_lower){
      return false
   }else{
      return true
   }
}
console.log("Does the password contain at least one uppercase letter:")
console.log(contains_uppercase("verysecretPassword!"))

/* Given two values - a, b 
   Return the largest of the two values.
   (they might be equal)                  */
function largest_of_2(a, b) {
   if (a > b){
      return a
   } else if (b > a){
      return b
   } else if (a = b){
      console.log(a + " and " + b + " are equal.")
   }
}
console.log(largest_of_2(3, 7))
   
/* Given three values - a, b, c
  Return the largest of the three values. 
  (they could be equal or duplicates)    */
function largest_of_3(a, b, c) {
   let largest_num = Math.max(a, b, c) // Math.max gets the largest value from a list.
   if ((a == b) && (a == c) && (b == c)){                    // Checking all the cases for equals and duplicates.
         console.log(a +  ", " + b + " and " + c + " are equal and they are both the largest.")
   } else if ((a == b) && ((b == largest_num) || (a == largest_num))){
      console.log(a +  " and " + b + " are equal and they are both the largest.")
   } else if ((a == c) && ((c == largest_num) || (a == largest_num))){
      console.log(a +  " and " + c + " are equal and they are both the largest.")
   } else if((b == c) && ((b == largest_num) || (c == largest_num))){
      console.log(b +  " and " + c + " are equal and they are both the largest.")
   } else{
   return largest_num
   }
}
console.log(largest_of_3(10, 9, 10))


/**** --- THE FUNCTIONS BELOW ARE FOR YOU TO USE WHILE YOU WORK --- ****/

// Return a random int from min to max (inclusive)
function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Round the given 'value' to the requested number of 'decimals'
// Example:  round(3.1415926, 4)  will return 3.1416
function round(value, decimals) {
  return Math.round((value + Number.EPSILON) * 10 ** decimals) / 10 ** decimals;
}

// Leave this here
module.exports = { specific_letter, concat, contains_uppercase, delta, slope, pythag, area_rectangle, area_rect_prism, distance, largest_of_2, largest_of_3 }