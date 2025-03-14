/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result); 
// I didn't change this because it appears to produce the desired result

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}
// it seems no change is needed, since the variable is named "isValid" (indicating its supposed to be valid), and putting a string inside Boolean() equates to true

let age = "25";
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);
// this was fixed by converting age into a number in order to acheive the desired sum inside totalAge


/* ---- IMPLICIT TYPE CONVERSION ---- */

let myAnswer = null; // before a user inputs their answer to the question "What is your favorite fruit?"
function answerPrompt() { // function for prompting user based on if they have answered
  if (myAnswer) {
    console.log("Thanks for answering!")
  } else {
   console.log("Please submit an answer.")
  } 
}
answerPrompt(); // populating the prompt to continue to ask for a submission

myAnswer = "watermelon"; // after the user answers the question
answerPrompt(); // populating the prompt thanking them for answering


/* ---- EXPLICIT TYPE CONVERSION ---- */

let myAge = "30 & 1/2 years"; // user decides to add a fraction or decimal to their current age 
let nextYear = parseInt(myAge) + 1; // removes the added fraction or decimal from the age and adds 1
console.log("Next year at this time, you will be " + nextYear + " years old.");