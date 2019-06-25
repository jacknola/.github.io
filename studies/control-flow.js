//1. Control flow can be defined with if-else if-else statements which will allow developers to control the flow of their code
//2. These statements can also be called conditional statements
//3. They allow us to make decisions within our code using booleans
//4. Booleans can be classified as true or false questions
//5. To build a conditional statement
//      a. a test condition within parentheses();
//      b. a body created with curly brackets {};
//  Body will only be executed if the condition is true

// To start a conditional statement you start by using the word "if" with a condition in parentheses

var color = "blue";

if(color === "red"){
    return true;
}

// To chain a conditional statement you use the "else-if" statement, allowing developers to create multiple conditions within their conditional statement

if(color === "red"){
    return true;
    // will be executed if condition 1 is true
} else if (color === "green"){
    return false;
    // will be executed if condition 1 is false and condition 2 is true
}

// Developers can add a "default" statement within their conditional statement that will only run if all other conditions are false
// This default statement can be defined with the word "else"

if(color === "red"){
    return true;
} else if (color === "green"){
    return false;
} else {
    console.log("It's blue!");
}
// Will return "It's blue!" to the console since condition 1 and condition 2 are false
// There is also another conditional statement that you can use called the switch statement
// It can help your code look neater 
// the switch statement uses a single expression for multiple choices
// The code that is executed is decided by the user
// A switch statement contains:
//  a. condition within parentheses
//  b. body made up of curly braces
//  c. return statement starting with the word "case"
//  d. break statement that will end each case

var color = "blue";

switch(color) {
    case "blue":
        console.log("The color is blue.")
    break;
    case "red":
        console.log("The color is red.")
    break;
    case "yellow":
        console.log("The color is yellow.")
    break;
default:
console.log("There is no color.")
}
// This switch statement will print "The color is blue." to the console since the other statements are false
// The break statements are necessary to kill each switch block of code for the code to run properly
