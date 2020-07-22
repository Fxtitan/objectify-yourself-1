const myCodeImmersivesObj = {
  objectify: 'me'
};
console.log(myCodeImmersivesObj);

// Set the value of property `objectify` to be "yourself".
myCodeImmersivesObj.objectify = 'yourself';
console.log(myCodeImmersivesObj);

// Add the new property `isAnExcellentObject` and set it to `true`.
myCodeImmersivesObj.isAnExcellentObject = true;
console.log(myCodeImmersivesObj);

// Add the property `term` and set it to 1.
myCodeImmersivesObj.term = 1;
console.log(myCodeImmersivesObj);

// Now add 1 to the value of your object's `term` property and put that new value back in your object's `term`.


// Now add a new property called `currentScore` and set it to 3.
myCodeImmersivesObj.currentScore = 3;
console.log(myCodeImmersivesObj)

// Now add a new property called `cumulativeScore` and set it to 50.
myCodeImmersivesObj.cumulativeScore = 50;

// Now add your `currentScore` and your `cumulativeScore` and put it back in `cumulativeScore`.
myCodeImmersivesObj.cumulativeScore = myCodeImmersivesObj.currentScore + myCodeImmersivesObj.cumulativeScore
console.log(myCodeImmersivesObj)

// Now add a property called `I am exactly this cool` (you'll need bracket notation!) and set it to `soooooo cool`.

// Now make a new EMPTY object that represents yourself.
const representsMySelf = {

};


// Add a `firstName` property and set it to a string.
representsMySelf.firstName = 'Sharod';
console.log(representsMySelf);


// Add a `lastName` property and set it to a string.
representsMySelf.lastName = 'Bailey';
console.log(representsMySelf);


// Add a `fullName` property and set it to the name properties put together with a space string in the middle.
representsMySelf.fullName = representsMySelf.firstName + ' ' + representsMySelf.lastName;
console.log(representsMySelf);

// Add an `age` property and set it to a number.
representsMySelf.age = 29;


// Add an address property and set it to an empty array.
representsMySelf.address = [];

// Now push three strings into that array.
representsMySelf.address.push('I')
representsMySelf.address.push('Am')
representsMySelf.address.push('Tired')
console.log(representsMySelf)


// Now make a new object, but this time we'll pre-populate it, not set it in any lines below it. In other words, the properties should be set the same way I initially set the `codeImmersivesObject` on line 1. It can be called whatever you want and can have whatever properties you want, as long as they include at least one string value, boolean value, number value, and array of numbers. The important thing here is: this should all be done within the brackets of the object, not below the place where the object is declared.
const codeImmersivesObject = {
  stringValue:'hmm',
  booleanValue: true,
  numberValue: 1,
  arrayOfNumbers: [1,2,3,4],
};

// As a stretch goal, pre-populate the object with at least one property using bracket notation as well.
const manufacturer = {
  make: 'Honda',
  models: ['Type_R','S2000'],
};

console.log(manufacturer['models'])


// As a further stretch goal, add a function that takes in a key name as a string and changes the corresponding value in the object you just made to be the string 'overwritten DYNAMICALLY'. Now call it with the name of one of the keys in your object and see if it works!
