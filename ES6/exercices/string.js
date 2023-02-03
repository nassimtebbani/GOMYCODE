// ES6 string practice
// use the string methods to solve the following problems

// 1. create a variable called 'myName' and assign it your name
// 2. create a variable called 'myNameLength' and assign it the length of your name
// 3. create a variable called 'myNameUpperCase' and assign it your name in all uppercase letters
// 4. create a variable called 'myNameLowerCase' and assign it your name in all lowercase letters
// 5. create a variable called 'myNameFirstLetter' and assign it the first letter of your name
// 6. create a variable called 'myNameLastLetter' and assign it the last letter of your name
// 7. console.log this sentence using template literals:
//"My name is "your name" ,
//and it is "name length" characters long"

var myName = "nassim";
var myNameLength = myName.length;
var myNameUpperCase = myName.toUpperCase();
var myNameLowerCase = myName.toLowerCase();
var myNameFirstLetter = myName.charAt(0);
var myNameLastLetter = myName.charAt(myNameLength - 1);
console.log(`My name is ${myName} and it is ${myNameLength} characters long`);
