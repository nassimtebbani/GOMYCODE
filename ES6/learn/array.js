//array ES6
const array = [1, "somehting", "otherthing", 4, 5];
//for each
array.forEach((el) => console.log(el * 2))

//map (very similar to forEach but it returns a new array)
let array1 = array.map(el => el * 2)
console.log(array1)

//filter (returns a new array with elements that pass the test)
let array2 = array.filter((el, i) => el > 20)
console.log(array2)

//reduce (returns a single value)
let array3 = array.reduce((acc, cur) => acc + cur, 5);
console.log(array3)

//find (returns the first element that passes the test)
let array4 = array.find(el => el > 25)
console.log(array4)

//findIndex (returns the index of the first element that passes the test)
let array5 = array.findIndex(el => el > 25)
console.log(array5)

//includes (returns true if the array contains the element)
let array6 = array.includes(3)
console.log(array6)

//some (returns true if at least one element passes the test)
let array7 = array.some(el => el > 25)
console.log(array7)

//every (returns true if all elements pass the test)
let array8 = array.every(el => el > 25)
console.log(array8)

//sort (sorts the elements of an array)
let array9 = array.sort((a, b) => a - b)
console.log(array9)

//reverse (reverses the order of the elements)
let array10 = array.reverse()
console.log(array10)

let array12 = array.reverse().slice(0, 2)
console.log(array12)