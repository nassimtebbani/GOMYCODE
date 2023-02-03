// number of words in a setence
// two words are separated by a only space
// ex: countWords('hello world') => 2

function numberOfWords(sentence) {
  var cpt = 1;
  for (let c in sentence) {
    console.log(sentence[c]);
    if (sentence[c] == " ") {
      cpt++;
    }
  }
  return cpt;
}

// Given two sets of elements, find the sum of all distinct elements from the set. In other words, find the sum of all elements which are present in either of the given set.
// array 1 : [3, 1, 7, 9], array 2: [2, 4, 1, 9, 3]
// Output: 13 (distinct elements 4, 7, 2)

// hint: remember how we used the hash table to count this time
// you don't need to count just check if something is true or not...

function sum(arr1) {
  var tmp = {};
  var cpt = 0;
  for (let i = 0; arr1.length; i++) {
    if (!tmp[arr1[i]]) {
      tmp[arr1[i]] = true;
      cpt = cpt + tmp[arr1[i]];
    } else {
      tmp;
    }
  }
  for (let i = 0; arr2.length; i++) {
    if (!tmp[arr2[i]]) {
      tmp[arr2[i]] = true;
      cpt++;
    } else cpt--;
  }
  return cpt;
}

// Now, given two sets of integers, write also two algorithms to print the sum of overlapping elements in two sets.
// The elements in each set are unique or there are no duplicates within a set.
// array 1: [12, 13, 6, 10] array 2: [13, 10, 16, 15] Common elements are 10, 13 Sum of overlapping elements: 46 (13 + 10)*2

function two(arr1, arr2) {
  var cpt = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) cpt = cpt + arr1[i];
    }
  }
  return 2 * cpt;
}

//1.write a JS function to convert a number in second into hours, minutes and seconds.
//ex: convert(3700) => this will return the string "1h 1m 40s"

function convert(s) {
  s = parseInt(s);
  var h = Math.floor(s / 3600);
  var m = Math.floor((s % 3600) / 60);

  return h + "h " + m + "m " + (s - h * 3600 - m * 60) + "s";
}

//2.Write JS function to count the number of vowels(a,e,u,i,o) in a given string ex: countVowels('hello') => 2

function countVowels(text) {
  var vowels = { a: true, e: true, u: true, i: true, o: true };
  var cpt = 0;
  for (let c in text) {
    if (vowels[text[c]]) cpt++;
  }

  return cpt;
}

//3.given a set of 2 arrays, write a JS function to find the common elements between them. ex: commonElements([1, 2, 3], [4, 3, 2]) => [2, 3]

function common(arr1, arr2) {
  var tmp = [];
  var k = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        tmp[k] = arr1[i];
        k++;
      }
    }
  }
  return tmp;
}

//4.Write a JS function to find the longest string in a given array of strings. ex: longestString(['a', 'ab', 'abc']) => 'abc'

function longest(arr) {
  var max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > max) max = arr[i];
  }
  return max;
}

//5.given a set of 2 arrays, write a JS function to calculate the sum ex: sum([1, 2, 3], [4, 5, 6]) => 21

function sum(arr1, arr2) {
  var cpt = 0;
  for (let i = 0; i < arr1.length; i++) {
    cpt = cpt + arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    cpt = cpt + arr2[i];
  }
  return cpt;
}

//6.You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items.
//We want to create the text that should be displayed next to such an item.
//ex: likes []
// must be "no one likes this"
//likes (["Peter"])
// must be "Peter likes this"
//likes (["Jacob", "Alex"])
// must be "Jacob and Alex like this"
//likes(["Max", "John", "Mark"])
// must be "Max, John and Mark like this" likes( ["Alex", "Jacob", "Mark", "Max"])
// must be "Alex, Jacob and 2 others like this"

function likes(arr) {
  switch (arr.length) {
    case 0:
      return "no one likes this";
    case 1:
      return arr[0] + " likes this";
    case 2:
      return arr[0], ",", arr[1], " likes this";
    case 3:
      return arr[0], ",", arr[1], " and", arr[2], "likes this";
    default:
      return arr[0], ",", arr[1], " and", arr.length - 2, "likes this";
  }
}

//7.Implement the function which takes an array containing the names of people that like an item.
//It must return the display text as shown in the examples:
//[] --> "no one likes this"
//["Peter"] --> "Peter likes this"
//["Jacob", "Alex"] --> "Jacob and Alex like this"
//["Max", "John", "Mark"] --> "Max, John and Mark like this"
//["Alex", "Jacob", "Mark", "Max"]--> "Alex, Jacob and 2 others like this"

//8.sum of digits examples: sumOfDigits(16) --> 1 + 6 = 7
//sumOfDigits(942) --> 9 + 4 + 2 = 15
//sumOfDigits(132189) --> 1 + 3 + 2 + 1 + 8 + 9 = 24
//sumOfDigits(493193) --> 4 + 9 + 3 + 1 + 9 + 3 = 29
function sumOfDigits(x) {
  if (x < 10) {
    return x;
  } else {
    var s = 0;

    do {
      s = s + (x % 10);
      x = Math.floor(x / 10);
    } while (x > 0);
    return sumOfDigits(s);
  }
}

//9.Given an array of integers, return a new array with each value doubled. For example: [1, 2, 3] --> [2, 4, 6]
function doubled(arr) {
  var arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr1[i] * 2);
  }
  return arr2;
}

//10.sum of number from 1 to n ex: sum(5) => return 15 because (1+2+3+4+5)
function oneToN(x) {
  var tmp = 0;
  for (let i = 1; i <= x; i++) tmp = tmp + i;

  return tmp;
}

//word Plural you have an array of string add "s" for words that are doesnt end with "s"
// ex: plural(['cow', 'pig', 'cow', 'cow']) => ['cows', 'pig', 'cows', 'cows']

function plural(text) {
  var tmp = [];
  for (let i = 0; i < text.length; i++) {
    var x = text[i];
    if (x[x.length - 1] === "s") tmp.push(x);
    else tmp.push(x + "s");
  }
  return tmp;
}
//If you can't sleep, just count sheep!!
//Task: Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

function sleep(x) {
  var str = "";
  for (let i = 1; i <= x; i++) {
    str = str + i + " sheep...";
  }
  return str;
}
