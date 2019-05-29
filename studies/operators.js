//Assignment operators
//  - assigns a value to a specific operand
//  - most common is the = operator
var fullName = "Jack Curran"// full name is assigned to Jack Curran with an = operator

//Comparison Operators
//  - will compare two values which will evaluate to a boolean, true or false
//      -Binary Comparison Operators
 1 < 2
 2 + 2 / 3 > 2
 1 <= 2
 1 >= 2
 //     - Strict Comparison
 1 === 1 // strictly equal to
 1 !== 2 // strictly not equal to
 
 
 
//Arithmetic Operators




// Logical Operators
//  - used with two or more values and only evaluates to true when ALL operands are true
//  - && - AND operator - both values must resolve to true
//  -|| - OR operator - at least one value must be true
//  - ! - BANG operator - flips the truthiness of the value
console.log(1 === 1 && 1 > 0)
console.log(1 !== 0 || 1 < 1)
console.log(!true) // prints false
console.log(!false)// prints true


// String operators
//  - comparison  and the concatenation (+) operators can be used on strings
var nameFirst = "Jack"
var nameLast = "Curran"
console.log(nameFirst + " " + nameLast)// will print Jack Curran instead of JackCurran; added a space with the concatenation operator



// Conditional (ternary) Operators
// -usually used in if-else if-else chain statements
// -shorthand 
if(condition){
  //  if value is true;
} else {
   // if value is false
}
// the conditional operator will shorten this to one line
condtion ? if value is true : if value is false// ? will seperate the condition from the true statement and anything after the : will run if value isn't true




// Unary Operators
//  - an operation with only one operand that will either come before or after the operator
//  - most of the time it is easier to use this operator instead of a regular function call
//  - cannot be overriden, so it is guaranteed to work
// The + unary opertor-
//      -will try and convert the operator to a number
//      - if not it will return NaN
+ "-3"// will return -3
+ true// will return 1
+ false// will return 0
+ function(val){
    
}// will return NaN
// The Logical Not operator (!)
//      -will return a boolean value and then negates it
!false// returns true
!0// returns true
!true// returns false
!-3// returns false

//The increment operator(++)
x = 10;
y = x++// returns y=10 (set to the value before incrementing) and x = 11

//Bitwise not operator(~)
// a bitwise not operator results in -(x + 1)
~3// returns -4
~true// returns -2
~false// returns -1

//typeof operator
typeof 2// returns 'number'
typeof true// returns 'boolean'
typeof 'jack'// returns 'string'


//The decrement operator (--)
//  - will decrease  value by 1 of operand
x = 10;
y = x--// returns y=10 (set to the value before decrementing) and x = 9