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
let convertToString = function convertToString(n) {
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
let returnValue1 = convertToString(23);

// - What is the typeof returnValue
string

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration

function addOne(n) {
  return n + 1;
}

// - Write a Function Expression

let addNumber1 = function addOne(n) {
  return n + 1;
}

// - Write an Arrow Function without curly brackets(if possible)

let addNumber2 = (n) => n + 1;

// - Write an Arrow Function with curly brackets

let addNumber = (n) => {
  return n + 1;
};

// - Execute the function

addOne(12);

// - Execute the function and store the return value in a variable.

let returnValue2 = addOne(12);

// - What is the typeof returnValue
number

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration

function substractOne(s) {
  return s - 1;
}

// - Write a Function Expression

let substractNumber = function substractOne(s) {
  return n - 1;
}

// - Write an Arrow Function without curly brackets(if possible)

let substractNumber1 = (s) => s - 1;

// - Write an Arrow Function with curly brackets

let substractNumber2 = (s) => {
  return s - 1;
};

// - Execute the function

substractOne(100);

// - Execute the function and store the return value in a variable.

let substractNumber3 = substractOne(100);

// - What is the typeof returnValue
number

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration

function sum(number1, number2) {
  return number1 + number2;
}

// - Write a Function Expression

let sumNumber = function sum(number1, number2) {
  return number1 + number2;
}

// - Write an Arrow Function without curly brackets(if possible)

let sumNumber1 = (number1, number2) => number1 + number2;

// - Write an Arrow Function with curly brackets

let sumNumber2 = (number1, number2) => {
  return number1 + number2;
}

// - Execute the function

sum(22, 34);

// - Execute the function and store the return value in a variable

let returnValue = sum(22, 34);

// - What is the typeof returnValue

number

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration

function square(number1) {
  return number1 ** 2;
}

// - Write a Function Expression

let squareNum = function square(number1) {
  return number1 ** 2;
}

// - Write an Arrow Function without curly brackets(if possible)

let squareNum1 = (number1) => number1 ** 2;

// - Write an Arrow Function with curly brackets

let squareNum2 = (number1) => {
  return number1 ** 2;
}

// - Execute the function

square(12);

// - Execute the function and store the return value in a variable

let returnValue6 = square(12);

// - What is the typeof returnValue

number

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration

function isGreater(x, y) {
  if (x > y) {
    return true;
  } else {
    return false;
  }
}

// - Write a Function Expression

let greater = function isGreater(x, y) {
  if (x > y) {
    return true;
  } else {
    return false;
  }
}

// - Write an Arrow Function without curly brackets(if possible)

let isGreater = (x, y) => (x > y)

// - Write an Arrow Function with curly brackets

let isGreater = (x, y) => {
  if (x > y) {
    return true;
  } else {
    return false;
  }
}

// - Execute the function

isGreater(12, 10);

// - Execute the function and store the return value in a variable

let returnValue5 = isGreater(12, 10);

// - What is the typeof returnValue

Boolean

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration

function oddOrEven(number) {
  if (number % 2 === 0) {
    return `Number is even`;
  } else {
    return `Number is odd`;
  }
}

// - Write an anonymous Function Expression

let oddEven = function (number) {
  if (number % 2 === 0) {
    return `Number is even`;
  } else {
    return `Number is odd`;
  }
}

// - Write an named Function Expression

let oddorEven = function oddEven(number) {
  if (number % 2 === 0) {
    return `Number is even`;
  } else {
    return `Number is odd`;
  }
}

// - Write an Arrow Function without curly brackets (hint: use ternary operator)

let oddEven2 = (number) => number % 2 === 0 ? `Number is even` : `Number is odd`;

// - Write an Arrow Function with curly brackets

let oddorEven1 = (number) => {
  if (number % 2 === 0) {
    return `Number is even`
  } else {
    return `Number is odd`
  }
}

// - Execute the function

oddorEven(21);

// - Execute the function and store the return value in a variable

let returnValue4 = oddorEven(21);

// - What is the typeof returnValue

number
