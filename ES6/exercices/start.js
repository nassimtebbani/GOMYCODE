// using destructuring exercise
const person = {
  name: "John",
  age: 100,
  city: "New York",
};
// 1. using destructuring, create a variable called "name"
// and assign it the value of the name property of the object below
// 2. using destructuring, create a variable called "age"
// and assign it the value of the age property of the object below

var { name } = person;
var { age } = person;
//know imagine you have a response from a backend
//and it is an object with the following structure
const response = {
  data: {
    user: {
      name: "John",
      age: 100,
      city: "New York",
    },
  },
  status: 200,
  message: "success",
};
// 3.using destructuring and the response object above,
//create a function that takes the response object as a parameter
//using destructuring of parameters, create a variable called "name"
//"status" and "message"
//if the status is 200, return the message and the name
//  verify your function with console.log
const fct = ({ data, status, message }) => {
  var { name } = { data };
  return status === 200 ? `${message} ${name}` : null;
};

console.log(fct(response));
// rest operator exercise
// 1. create a function that takes an array as a parameter
// 2. using the rest operator, create a variable called "first"
// 3. using the rest operator, create a variable called "rest"
// 4. using the rest operator, create a variable called "last"
// 5. using the rest operator, create a variable called "second"

const fct2 = (first, second, ...rest) => {
  console.log("first", first);
  console.log("second", second);
  console.log("rest", rest);
  console.log("last", rest[rest.length - 1]);
};
// concat exercise
// 1. create a function that takes multiple numbers as parameters
//  using the rest operator in params,
// return an object with the following structure
// {
//     first: first element of the array,
//     rest: rest,
//     last: last element,
//}
// for example: concat(1,2,3,4,5,6,7,8,9,10)
// should return
// {
//     first: 1,
//     rest: 23456789,
//     last: 10,
//}

const concat = (a, ...args) => {
  var obj = {};
  obj["first"] = a;
  obj["rest"] = args;

  return obj;
};
