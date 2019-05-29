/* function help us to execute a block of code 
 we can execute the block of code whenever we need to */

function (par1, par2){/*declaring the function with parameters (placeholders)
    // body of function: code that will perform action*/
}
// parameters can be referred to as inputs

var sum = add()/* will assign the function to the variable sum
            -can only be assigned to a variable after the function is constructed
            -This will throw us an error into the console since it is assigned before the function was created*/

function add(num1, num2){// named function
    return num1 + num2;
}
// naming your functions will help you know what the function actually does
var sum = add(1,2)// since this variable is created after the function it will return three

console.log(sum)/* calling function with arguments(actual numbers thatwill be executed) / returns three
arguments can be referred to as the outputs of the functions*/



function nothing(){// parameters are optional within functions
    return undefined // will return undefined as a single value of the function
}

/*Functions can use variables or constants within the global or parent scope
 once a variable is declared inside a function it will only be available within that function (local scope)*/

var num = 1 // initializing a variable
function something(){
    var num = 2 // reassigning the variable within the function
}
console.log(num)// will print 1
something();// calling the function
console.log(num)// will print 2 since we have called the function above it

var num = 1 // initializing a variable
function something(){
    var num = 2 // reassigning the variable within the function
    function anotherSomething(){
        var num = 3;
    }
}
anotherSomething();
console.log(num)// will throw an error since a function cannot access a child scope within another function