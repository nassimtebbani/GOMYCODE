//array ES6 practice

// use the array methods to solve the following problems
//0. create an array with the numbers 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// devide each element by 2
// 1. sort the array from smallest to largest
// 2. remove the last item of the array
// 3. check if the array includes the number 23
// 4. add the number 42 to the end of the array
// 5. remove the first item of the array
// 6. place the number -3 at the start of the array
// 7. create a new array with only the numbers that are over 10
// 8. remove all numbers that are under 10
// 9. sort the array from largest to smallest

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr0 = arr.map((el) => el / 2)
const arr1 = arr.sort((a, b) => a - b)
const arr2 = arr.slice(0, arr3.length - 1)
const arr3 = arr.includes(23)
const arr4 = arr.push(42)
const arr5 = arr.shift()
const arr6 = arr.unshift(-3)
const arr7 = arr.filter((el) => el > 10)
const arr8 = arr.filter((el) => el > 10)
const arr9 = arr4.sort((a, b) => b - a)