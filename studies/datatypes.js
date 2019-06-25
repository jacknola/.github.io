// There are six types of data types
// simple data types or immutable
//  - do not hold any other values
//  - operations on these simple data types will only return new simple values
//  - simple data types are copied from one value to the next (copy by value)
// Three of them are simple which include:

//  a. number - numeric data
      var num =  123// => declaring a variable with a numerical value
      num = 321// reassinging the variable or copied by value
      
      
//  b.string - character data
//      bb. wrapped in quotes
          var name =  "string"// => decalring a variable with a string value
// if we wanted to access the first character in our string we would type name[0]==>"s"
          
          
//  c. boolean - true or false statement
//      cc. usually within if- else if-else statements
            if(1 === 1){
                return true;// => conditional statement with a boolean return statement
            }
            
            
// The other three are complex which include:
// - can collect other values, so their size can change
//  - assigning complex data types (passed by reference)

//  a. array
//      aa. wrapped in an array literal or brackets []
//      aaa. can hold any data type
        var arr = [1, "string", true]// => array with three different data types
 // with the  .length() method we can find the length of our array, which would be 3 in this case
 // all arrays start with an index of 0, so arr[0] would be 1 and arr[1] would be "string"
            
//  b. function
//      bb. will help execute a block a code, performing a specific action
//        bbb. can use whenever and how ever many times you need
      var add = function (num1,num2){ // => declaration with parameter (placeholders)
                return num1 + num2// => body with return statement
            }// => will add num1 + num2
           console.log(add (1, 2))// calling a function with arguments (the number that will be added) -- prints 3 to console
// can only call a function after you have declared with a variable

function cool(r){
     r += 2;
}
var s = 3
console.log(cool(s))// prints 5// copied by reference when s is passed into the function cool();
            
//  c. object
    // a complex data that is used to store data
    // uses key/value pairs seperated by commas
        //like a dictionary and every word has a defintion
    // stored in curly braces {}
    // can contain any type of data type
    // do not have a length property
    
    var obj = { // declaration with an object literal, {}
        nameFirst: "Jack", // key/ value pairs
        nameLast: "Curran",
        age: 21
    }
    
    console.log(obj.nameFirst)// prints Jack to the console// this is called dot notation
    var hairColor = "brown";
    
    // NaN
    // - stands for Not a Number
    typeof NaN //=> "number";
    
    //undefined
    //will print to console on multiple occassions
    //if you don't initialize a variable the console will print undefined
    var patient
    console.log(patient);//=. prints undefined
    
    //null
    //- valid value with no properties
    //- can't be changed
    
    // infinity
    // - represents positive infinity (numerically)
    // - only displayed when it exceeds the max limit of the floating point numbers
    
    // -infinity
    // - represents negative inifinity (numerically)
    // - only displayed when it exceeds the min of the floating point numbers