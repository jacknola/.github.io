// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-jacknola");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
  var result = _.filter(array, function(customer){
        return customer.gender === "male";
    }).length;
    return result;
};

var femaleCount = function(array){
  var arr = [];
    return _.reduce(array,function(preResult, currentElement, index){
        if(currentElement.gender === "female"){
              arr.push(preResult+=1);
        }
        return arr.length;
    }, 0);
};

var oldestCustomer = function (array){
   var oldestPerson = _.reduce(array, function(seed, person, index){
       if (seed.age > person.age){
           seed = seed
           return seed
       }else {
           seed = person;
           return seed;
       }
   })
   return oldestPerson.name;
}

var youngestCustomer = function (array){
   var youngestPerson = _.reduce(array, function(seed, person, index){
       if (seed.age < person.age){
           seed = seed
           return seed
       }else {
           seed = person;
           return seed;
       }
   })
   return youngestPerson.name;
};

var averageBalance = function(array){
 let totalBalance = 0;
 let averageBalance = 0;
_.map(array, function(customer, i, a) {
    let noDollar = customer.balance.replace(/\$/,'');
    let noComma = noDollar.replace(/\,/,'');
    let newBalance = parseFloat(noComma);
   totalBalance += newBalance;
   averageBalance = totalBalance / array.length;
   });
   return averageBalance;
};


var firstLetterCount = function(array, letter) {
    let lastNameLetter = _.filter(array, customer => customer.name[0].toUpperCase() === letter.toUpperCase());
    return lastNameLetter.length;
};

var friendFirstLetterCount = function(array, customer, letter){
let customerMatch = _.filter(array, customerObject => customerObject.name === customer);
let friendsArray = _.pluck(customerMatch, "friends")[0];
return _.filter(friendsArray, pal => pal.name[0] === letter.toUpperCase()).length;
};

var friendsCount = ((array, name) =>  {
return _.reduce(array, (namesList, customer) => {
     _.each(customer.friends, function(friend){
         if(friend.name === name) {
         namesList.push(customer.name);
     }});
 return namesList;
}, []);
});

var topThreeTags = function(array){
   let result = _.reduce(array, function(acc, customer,index, array){
       _.each(customer.tags, function(tag){
           if(acc[tag]){
               acc[tag]++
           } else{
               acc[tag] = 1
           }
       });
        return acc;
    },{});
  result = _.map(result, function(count, tag, object){
       return [tag, count];
   });
   result = result.sort(function(a,b){
       return b[1] - a[1];
   }).slice(0, 3);
   result = result;
   return _.map(result, function(tag){
       return tag[0];
   });
};

var genderCount = function(array){
    var genderObj = {};
    var maleCount = 0;
    var femaleCount = 0;
    var transCount = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i].gender === "male"){
             maleCount++
        }
        if(array[i].gender === "female"){
            femaleCount++
        }
        if(array[i].gender === "transgender"){
            transCount++
        }
    }
    genderObj.male = maleCount;
    genderObj.female = femaleCount;
    genderObj.transgender = transCount;
    return genderObj;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;