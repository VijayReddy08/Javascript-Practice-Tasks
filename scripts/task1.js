// Task 1: Declare a variable with your name and display it using alert.
let myName = "Vijay Reddy Vanga";
alert(myName);

// Task 2: Declare two variables with any numeric values. Add these two variables and
// display the result using alert.
let a = 5;
let b = 5;
alert("Sum of two numbers: " + (a + b));

// Task 3: Create a prompt to ask the user's age. If the user is 18 or older, display an alert
// saying "You are an adult." Otherwise, display an alert saying "You are a minor."
let userAge = Number(prompt("Enter your age:", "1"));
if (typeof userAge === "number") {
  if (typeof userAge === "number") {
    if (userAge >= 18) {
      alert("You are an adult.");
    } else {
      alert("You are a minor.");
    }
  } else {
    alert("Kindly enter a valid value for age");
  }
} else {
  alert("Enter a valid age");
}

// Task 4: Declare a variable with a boolean value. Use the typeof operator to check if it is
// a boolean. If it is, display an alert saying "This is a boolean." Otherwise, display an alert
// saying "This is not a boolean."
let bool = true;
if (typeof bool === "boolean") {
  alert("This is a boolean.");
} else {
  alert("This is not a boolean.");
}

// Task 5: Create a prompt to ask for a number. Multiply this number by 10 and display the
// result using alert.
let num2 = Number(prompt("Enter any number"));
if (typeof num2 === "number") {
  alert("The result is: " + num2 * 10);
} else {
  alert("Enter a valid number");
}

// Task 6: Declare a variable with any value. Use typeof to check if the value is a string. If
// it is, concatenate another string to it and display the result using alert. Otherwise, display
// an alert saying "The value is not a string."
let num3 = 8;
if (typeof num3 === "string") {
  alert(num3 + " is a string.");
} else {
  alert("The value is not a string.");
}

// Task 7: Create a prompt to ask the user's favorite number. Check if the number is even or
// odd using the modulus operator. Display an alert with the message "The number is even"
// or "The number is odd."
let favNumber = Number(prompt("Enter your favourite number"));
if (typeof favNumber === "string") {
  if (favNumber % 2 === 0) {
    alert(favNumber + " is an even number");
  } else {
    alert(favNumber + " is an odd number");
  }
} else {
  alert("Enter a valid number");
}

// Task 8: Declare a variable with a number. Use conditional branching to check if the
// number is positive, negative, or zero. Display an alert with the appropriate message.
let num4 = 4;
if (num4 === 0) {
  alert(num4 + " is equal to zero");
} else if (num4 > 0) {
  alert(num4 + " is a positive number");
} else {
  alert(num4 + " is a negative number");
}

// Task 9: Create a prompt to ask the user's name. If the name is empty, display an alert
// saying "Name cannot be empty." Otherwise, display an alert with the message "Hello,
// [name]!"
let userName = prompt("Enter your name");
if (userName === "") {
  alert("Name cannot be empty.");
} else {
  alert("Hello, " + userName);
}

// Task 10: Declare two variables with numeric values. Use the comparison operators to
// check if the first number is greater than, less than, or equal to the second number. Display
// the appropriate message using alert.
let num5 = 6;
let num6 = 4;
if (num5 > num6) {
  alert(num5 + " is greater than " + num6);
} else if (num5 < num6) {
  alert(num5 + " is less than " + num6);
} else {
  alert(num5 + " is equal to " + num6);
}

// 1 t0 20 tables
for (let i = 1; i <= 20; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// Numbers divisible by 3 and 5
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

// Leap year
for (let i = 2000; i <= 2100; i++) {
  if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
    console.log(`${i} is a leap year`);
  }
}

// 1 to 99
for (let i = 0; i <= 100; i++) {
  if (i === 100) {
    break;
  }
  console.log(i);
}
