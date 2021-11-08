// -Look at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration

function addOne(number1 , number2) {
  return number1 + number2;
}

// - Write a Function Expression

let addNumber = function addOne(number1 , number2) {
  return number1 + number2;
}

// - Write an Arrow Function without curly brackets(if possible)

let addNumber = (number1 , number2) => number1 + number2;

// - Write an Arrow Function with curly brackets

let addNumber = (number1 , number2) => {
  return number1 + number2;
};

// - Execute the function

addOne(12,13);

// - Execute the function and store the return value in a variable.

let returnValue = addOne(12,13);

// - What is the typeof returnValue

"number"

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration

function substractOne(number1 , number2) {
  return number1 - number2;
}

// - Write a Function Expression

let substractNumber = function substractOne(number1 , number2) {
  return number1 - number2;
}

// - Write an Arrow Function without curly brackets(if possible)

let substractNumber = (number1 , number2) => number1 - number2;

// - Write an Arrow Function with curly brackets

let substractNumber = (number1 , number2) => {
  return number1 - number2;
};

// - Execute the function

substractOne(100, 50);

// - Execute the function and store the return value in a variable.

let substractNumber = substractOne(100, 50);

// - What is the typeof returnValue

"number"

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration

function sum(number1 , number2) {
  return number1 + number2;
}

// - Write a Function Expression

let sumNumber = function sum(number1, number2) {
  return number1 + number2;
}

// - Write an Arrow Function without curly brackets(if possible)

let sumNumber = (number1, number2) => number1 + number2;

// - Write an Arrow Function with curly brackets

let sumNumber = (number1, number2) => {
  return number1 + number2;
}

// - Execute the function

sum(22, 34);

// - Execute the function and store the return value in a variable

let returnValue = sum(22, 34);

// - What is the typeof returnValue

"number"

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration

function square(number1) {
  return number1 * number1;
}

// - Write a Function Expression

let squareNum = function square(number1) {
  return number1 * number1;
}

// - Write an Arrow Function without curly brackets(if possible)

let squareNum = (number1) => number1 * number1;

// - Write an Arrow Function with curly brackets

let squareNum = (number1) => {
  return number1 * number1;
}

// - Execute the function

square(12);

// - Execute the function and store the return value in a variable

let returnValue = square(12);

// - What is the typeof returnValue

"number"

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration

function isGreater(x, y) {
  if (x > y) {
  return true;
}else {
  return false;
}
}

// - Write a Function Expression

let greater = function isGreater(x, y) {
  if (x > y) {
  return true;
}else {
  return false;
}
}

// - Write an Arrow Function without curly brackets(if possible)

let greater = (x, y) => x > y;

// - Write an Arrow Function with curly brackets

let greater = (x, y) => {
  if (x > y) {
    return true;
  }else {
    return false;
  }
}

// - Execute the function

isGreater(12, 10);

// - Execute the function and store the return value in a variable

let returnValue = isGreater(12, 10);

// - What is the typeof returnValue

"Boolean"

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration

function oddOrEven (number) {
  if (number % 2 === 0) {
    return `Number is even`
  } else {
    return `Number is odd`
  }
}

// - Write an anonymous Function Expression

let oddEven = function (number) {
  if (number % 2 === 0) {
    return `Number is even`
  } else {
    return `Number is odd`
  }
}

// - Write an named Function Expression

let oddEven = function oddOrEven (number) {
  if (number % 2 === 0) {
    return `Number is even`
  } else {
    return `Number is odd`
  }
}

// - Write an Arrow Function without curly brackets (hint: use ternary operator)

let oddEven = (number) => number % 2 === 0;

// - Write an Arrow Function with curly brackets

let oddEven = (number) => {
  if (number % 2 === 0) {
    return `Number is even`
  } else {
    return `Number is odd`
  }
}

// - Execute the function

oddEven(21);

// - Execute the function and store the return value in a variable

let returnValue = oddEven(21);

// - What is the typeof returnValue

"string"
