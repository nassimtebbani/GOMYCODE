// imagine you have a button with a click event
//write an arrow function named handleClick(age)
//that will change the color of the button to red if
//the age is greater than 18 and green if the age is less than 18
// age is a parameter of the function

const handleClick = (e, age) => {
    e.target.style.backgroundColor = age >= 18 ? 'red' : 'green';
}