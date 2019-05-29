// There are three javascript loops, which iterate over data within your code
//allows  developers can pull out a certain value one at a time

// 1. for loop
//  - only for arrays and strings
//  - helps with looping over arrays

// looping forward over an array:
for (var i = 0; i < 100; i++){// i=0 means you are setting your index to 0, stop condition is 100 (will stop loop at 100), i++ is out iteration goes up 1 by 1
    console.log(i);// prints 1-99 on the console
}

// looping backwards over an array:
var names = ["jack", "patrick", "bob"]
for (var i = names.length - 1; i > -1; i-- ){
    console.log(i);
}

// 2. for-in loop
//  - only used for looping over objects
//  - will allow us to get values through our keys
var obj = {
    nameFirst: "Jack",
    nameLast: "Curran",
    age: 21
}

for (var key in obj){// allowing us to initialize all keys within the object/ key is updated with each new key/value pair you create
    console.log(obj[key])// will print the values found within the key/ do not use dot notation! will try and locate a property on the object which is not there
}

// 3. while loops
//  -uses a condition in parentheses and once that condition becomes false the loop will stop running
 var count = -2
 while(count < 20){ // once count equals 20 the loop will stop running, since the condition wouldn't be true
     console.log(count);// will print the count to the console
     count++;// will increase the count by 1 then starts the loop again
 }// in some cases if you don't set up your while loop correctly you can create an infinite loop which will crash your program