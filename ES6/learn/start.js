// template literal
// const age = 100;
// const Name = 'John';
// const sentence = `My name is ${Name} and I am ${age} years old`;
// console.log(sentence);


// destructuring
const person = {
    Name: 'Hamza',
    age: 100,
    track: 'es6',
}

let LoginHandler = (person) => {
    return `my name is ${person.name}, i'm ${person.age} and we are learning ${city.track}`;
};
console.log(LoginHandler(person));

let Component = ({ name, age, track }) => {
    return `my name is ${name}, i'm ${age} and we are learning ${track} `;
};
console.log(Component(person));

const { name, age, city } = person;
console.log(Name, age, city);
let infos = { track: 'full stack js', framework: 'react' }
let fullinfo = {...person, ...infos }
console.log(fullinfo)
let info = {...person, id: 1 }
console.log(info)


//array destructuring
const arr = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = arr;

// spread operator
const arr2 = [...arr, 6, 7, 8, 9, 10];
console.log(arr2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// rest operator
function RestOperator(a, b, ...args) {
    console.log("a", a)
    console.log("b", b)
    console.log(args)
}
RestOperator(1, 2, 3, 4, 5);