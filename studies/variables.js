/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
* 3. 
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

//variables can be hoisted into the global scope
//  -only the declaration
//  - available throughout any scope
// - use var if a developer needs  to use a variable throughout many scopes

var name = "jack";

function newName (){
    name = 'bob';
}
console.log(name)// prints "jack" because it is in the global scope// reassigning name within the function will make it only available in the function (function scope)

// Declaring variables with let
//  - let variables can be reassigned , but not hoisted
//  - scoped to if and loop blocks
// - use let when a developer wants to declare a variable strictly to its own scope

//console.log(x)// throws a reference error since the let variable isn't created before the log (not hoisted)

let x = 12;

if (false) {
    let x = 10// let is only available within the block of code where it is declared
};
console.log(x)// x within if statement is not accessible

function foo(){
    let str = "hi";
    if(true){
        let str = "hello";
        console.log(str);// prints "hello" since it let variables are only avaialable to their own scope
    }
    console.log(str);//prints 'hi'since the first declaration of let is in the outer scope
}


// Declaring variables with const
//  - const variables can't be reassigned and they can't be hoisted either
//  - they are scoped to functions anf if and loop blocks
//  - use when a developer needs to declare a constant variable that they do not want changed

const name2 = "jack";
//const name2 = "bob";// will not be reassigned to "bob" since "jack" is assigned to a constant variable

console.log(y)// throws a reference error since the const variable isn't created before the log (not hoisted)

const y = 12;
//console.log(y)// prints 12 since the variable has been already declared

// const and let variables can only be accessed after they have been declared
