//Assignment operators
//  - assigns a value to a specific operand
//  - most common is the = operator
var fullName = "Jack Curran"// full name is assigned to Jack Curran with an = operator

//Comparison Operators
//  - will compare two values which will evaluate to a boolean, true or false
//      -Binary Comparison Operators
 1 < 2 // 1 is less than 2
 2 + 2 / 3 > 2
 1 <= 2 // 1 is less than or equal to 2
 1 >= 2 // 1 is greater than or equal to 2
 
 //     - Strict Comparison
 1 === 1 // strictly equal to
 1 !== 2 // strictly not equal to
 
 
 
//Arithmetic Operators
// addition (+)
var x = 1;// initilization
var y = 2;// initialization
console.log(x+y)// will add the variables// prints 3

// subtraction (-)
var x = 1;// initilization
var y = 2;// initialization
console.log(x-y)// will subtract the variables// prints -1

// division (/)
var x = 4;// initilization
var y = 2;// initialization
console.log(x/y)// will divide the variables// prints 2

// multiplication (*)
var x = 4;// initilization
var y = 2;// initialization
console.log(x*y)// will add the variables// prints 8

// remainder (%)
var x = 5;// initialization
var y = 2;// initialization
console.log(x%y)// will print remainder, if there is one, after numbers are divided/ prints 1

// increment (++)
var x = 5// initialization
x++// increment (adds 1)
console.log(x)// prints 6

// decrement (--)
var x = 6// initialization
x--// decrements (subtracts 1)
console.log(x)// prints 5




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
if(x > y){
  // return true if value is true;
} else {
   // return false if value is false
};
// the conditional operator will shorten this to one line
var result = x > y ? "x is greater than y": "x is less than y" // ? will seperate the condition from the true statement and anything after the : will run if value isn't true




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
var x = 10;
var y = x++// returns y=10 (set to the value before incrementing) and x = 11

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

//Assignment Operators
//  +=
//  - works on numbers but also strings
var x = 5
var y = 5
var z = x+=y
console.log(z)// assigns x to y as well as adding them together/ prints 10
var str1 = "Hello"
var str2 = " World"
var str3 = str1 += str2// can use this operator on string/ concatenates the two strings
console.log(str3)// prints "Hello World"

//  /=
var x = 10
var y = 5
var z = x/=y
console.log(z)//assigns x to y as well as dividing them/ prints 2

//  -=
var x = 12
var y = 6
var z = x-=y
console.log(z)// assigns x to y as well as subtracting them/ prints 6

//  *=
var x = 2
var y = 2
var z = x*=y
console.log(z)// assigns x to y as well as multiplying them/ prints 4


