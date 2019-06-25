//There are many string methods tht can help manipulate the string including:
//  -charCodeAt
//  - indexof
//  - toUpperCase
//  - toLowerCase
//  - split
//  -slice

// The .charCodeAt() method will return a specific character depending on what index you choose
var string = "Hello World"
var n = string.charCodeAt(1)
console.log(n)// will print "e" because it is located at index[1] in our string

    
// The .indexof() method will return the position of a character within the string
    var dogName = "Woodrow";
    console.log(dogName.indexOf("d"));// returns 3
    
// The toUpperCase() method will convert a string to Upper Case
    var favFood = "Burger";
    console.log(favFood.toUpperCase())// returns "BURGER"
    
// The toLowerCase() will convert a string to Lower Case
    var favGame = "Solitaire"
    console.log(favGame.toLowerCase())// returns "solitaire"
    
// The .split() method will remove any whitespace from both sides of the string
    var message = "Hello World"
    console.log(message.split(" "))// will return array with the substrings ["Hello", "World"]
    
// The.slice() method wil extract a part of string and then return the extracted part as a new string
    var sports = "Baseball, Football, Basketball";
    var result = sports.slice(10,17);
    console.log(result)// prints Football because the slice method takes the 10th-17th character of the string ultimately creating the new string
    
// The .concat() method will add two or more strings together
    var str1 = "Hi my name is"
    var str2 = " Jack"
    console.log(str1.concat(str2))// will add strings together/ prints "Hi my name is Jack"
    
// The .includes() method will check if a certain string or character is within a string
    var str1 = "I am lost"
    console.log(str1.includes("lost"))// returns true since lost is within the string