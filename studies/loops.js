// There are three javascript loops, which iterate over data within your code
//allows  developers can pull out a certain value one at a time

// 1. for loop
//  - only for arrays and strings
//  - helps with looping over arrays

// looping forward:
for (var i = 0; i < 100; i++){// i=0 means you are setting your index to 0, stop condition is 100 (will stop loop when index is not greater than 100), i++ is out iteration goes up 1 by 1
    console.log(i);// prints 1-99 on the console
}
// looping backwards:
for(var i = 100; i > -1; i--){// i = 100 means your index is set to 0, stop condition is -1 (will stop loop when index is not greater than -1); i-- is our deteration goingg down by 1
    console.log(i);
}

//looping forward over an array
var names = ["jack", "patrick", "bob"]
for (var i = 0; i < names.length; i++){//index is set to 0 (jack); stop condition is the length of names array(will stop loop when index is not less than the length of names); incrementing 1 with i++
    console.log(names[i]);//prints each name to console
}


// looping backwards over an array:
var names = ["jack", "patrick", "bob"]
for (var i = names.length - 1; i > -1; i-- ){//index is set to the last name in the names array (bob); stop condition is -1(will stop loop when index is not greater than the index of -1); decrementing 1 with i--
    console.log(names[i]);//prints each name to console
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
// a for loop will run a pre-determined number of times and it will only ever loop for a specific number, but a while loop will run until a pre-determined scenario takes places; maybe immediately or a couple hundred times
//  -uses a condition in parentheses and once that condition becomes false the loop will stop running
 var count = -2
 while(count < 20){ // once count equals 20 the loop will stop running, since the condition wouldn't be true
     console.log(count);// will print the count to the console
     count++;// will increase the count by 1 then starts the loop again
 }// in some cases if you don't set up your while loop correctly you can create an infinite loop which will crash your program