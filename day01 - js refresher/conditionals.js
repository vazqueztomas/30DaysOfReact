// Exercises : level 1

// 1
let age = prompt("Enter your age: ");
if (age >= 18) {
  console.log("You are old enough to drive ");
} else {
  console.log(`youre ${age}. Wait to 18.`);
}

// 2
let myAge = 21;
if (age > myAge) {
  console.log("You are older than me");
} else if (age < myAge) {
  console.log("You are younger than me");
} else {
  console.log("You are equal than me");
}

// 3
let a = 4;
let b = 3;

// if else
if (a < b) {
  console.log(`${a} is greater than ${b}`);
} else if (b > a) {
  console.log(`${b} is greater than ${a}`);
} else {
  console.log(`${a} is equal than ${b}`);
}

// ternary operator
a < b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${b} is greater than ${a}`);

// 4
let inputNumber = prompt('Enter a number: ')
(number % 2 == 0) ? console.log('even') : console.log('odd')

//5
