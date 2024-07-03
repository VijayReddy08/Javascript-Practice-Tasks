// Condition - 1
var age = Number(prompt("Enter your age:", "1"));
var hasValidIdProof = String(prompt("Do you have a valid id proof?", "No"));
//console.log(typeof typeof age);

if (typeof age == "number" && typeof hasValidIdProof == "string") {
  if (+age >= 18 && hasValidIdProof.toLowerCase() === "yes") {
    alert("You are eligible to vote!");
  } else {
    alert("You are not eligible to vote : (");
  }
} else {
  alert("Kindly enter a valid value for age and id proof");
}

// Condition - 2
var battery = 19;
if (battery < 20) {
  var result = confirm("Battery is less than 20%, Switch to low power mode?");
  if (result == true) {
    alert("Switched to low power mode");
  } else {
    alert("Battery is less than 20%, Consider plugging in the charger.");
  }
}

// Condition - 3
var sleepy = String(prompt("fleeing sleepy?", "yes"));

if (typeof sleepy == "string") {
  if (sleepy.toLowerCase() === "yes") {
    alert("Go have a coffee!");
  } else {
    alert("Ok then continue working");
  }
} else {
  alert("Please answer as Yes or No");
}

// Condition - 4
var noOfBacklogs = Number(prompt("How many backlogs do you have?"));
if (typeof noOfBacklogs == "number") {
  if (noOfBacklogs <= 1) {
    alert("Your eligible for placement drive!");
  } else {
    alert("Your not eligible for placement drive : (");
  }
} else {
  alert(
    "Your backlogs can't be less than zero and greater than the no of subjects"
  );
}

// Condition - 5
var salary = Number(prompt("Enter expected salary in LPA"));
if (typeof salary == "number") {
  if (salary < 15 && salary > 0) {
    alert("You need to work hard");
  } else if (salary >= 15) {
    alert("You need to work every hard");
  } else {
    alert("Please enter a valid salary");
  }
} else {
  alert("Enter a valid salary");
}

// Condition - 6
var percentage = Number(prompt("Enter your percentage"));
if (typeof percentage == "number") {
  if (percentage < 70) {
    alert("You need to focus more on improving your skills");
  } else {
    alert("You are eligible for Round 1");
  }
} else {
  alert("Enter a valid percentage");
}

// Condition - 7
var classTime = prompt("Enter class start time");

if (classTime === "9:00") {
  alert("Reach the institute by 8:50");
} else if (classTime === "9:30") {
  alert("Reach the institute by 9:20");
}

// Condition - 8
var marks = Number(prompt("Enter your marks:"));
if (typeof marks == "number") {
  var totalMarks = 100;
  var percentage = (marks / 100) * 100;
  if (percentage >= 50) {
    alert(
      "Congratstulations, you have cleared the exam with " + percentage + "%"
    );
  } else {
    alert(
      "You have failed the exam, as you have secured " +
        percentage +
        "% which is less than 50%"
    );
  }
} else {
  alert("Enter valid marks");
}

// Condition - 9
var num = Number(
  prompt("Enter a number to know whether it is an even or odd number")
);
if (typeof num == "number") {
  if (+num % 2 == 0) {
    alert(num + " is an even number");
  } else {
    alert(num + " is an odd number");
  }
} else {
  alert("Enter a valid number");
}

// Condition - 10
var num1 = Number(prompt("Enter a number to find the square of it"));
if (typeof num1 == "number") {
  sq = num1 ** 2; // Method - 1
  // sq = num1 * num1; // Method - 2
  alert("Square of " + String(num1) + " is " + sq);
} else {
  alert("Enter a valid number");
}

// Task 1: Declare a variable with your name and display it using alert.
var myName = "Vijay Reddy Vanga";
alert(myName);
// Task 2: Declare two variables with any numeric values. Add these two variables and
// display the result using alert.
var a = 5;
var b = 5;
alert("Sum of two numbers: " + (a + b));
// Task 3: Create a prompt to ask the user's age. If the user is 18 or older, display an alert
// saying "You are an adult." Otherwise, display an alert saying "You are a minor."
var userAge = Number(prompt("Enter your age:", "1"));
if (typeof userAge == "number") {
  if (userAge >= 18) {
    alert("You are an adult.");
  } else {
    alert("You are a minor.");
  }
} else {
  alert("Kindly enter a valid value for age");
}
// Task 4: Declare a variable with a boolean value. Use the typeof operator to check if it is
// a boolean. If it is, display an alert saying "This is a boolean." Otherwise, display an alert
// saying "This is not a boolean."
var bool = true;
if (typeof bool == "boolean") {
  alert("This is a boolean.");
} else {
  alert("This is not a boolean.");
}
// Task 5: Create a prompt to ask for a number. Multiply this number by 10 and display the
// result using alert.
var num2 = Number(prompt("Enter any number"));
alert("The result is: " + num2 * 10);
// Task 6: Declare a variable with any value. Use typeof to check if the value is a string. If
// it is, concatenate another string to it and display the result using alert. Otherwise, display
// an alert saying "The value is not a string."
var num3 = 8;
if (typeof num3 == "string") {
  alert(num3 + " is a string.");
} else {
  alert("The value is not a string.");
}
// Task 7: Create a prompt to ask the user's favorite number. Check if the number is even or
// odd using the modulus operator. Display an alert with the message "The number is even"
// or "The number is odd."
var favNumber = Number(prompt("Enter your favourite number"));
if (favNumber % 2 === 0) {
  alert(favNumber + " is an even number");
} else {
  alert(favNumber + " is an odd number");
}
// Task 8: Declare a variable with a number. Use conditional branching to check if the
// number is positive, negative, or zero. Display an alert with the appropriate message.
var num4 = 4;
if (num4 == 0) {
  alert(num4 + " is equal to zero");
} else if (num4 > 0) {
  alert(num4 + " is a positive number");
} else {
  alert(num4 + " is a negative number");
}
// Task 9: Create a prompt to ask the user's name. If the name is empty, display an alert
// saying "Name cannot be empty." Otherwise, display an alert with the message "Hello,
// [name]!"
var userName = prompt("Enter your name");
if (userName == "") {
  alert("Name cannot be empty.");
} else {
  alert("Hello, " + userName);
}
// Task 10: Declare two variables with numeric values. Use the comparison operators to
// check if the first number is greater than, less than, or equal to the second number. Display
// the appropriate message using alert.
var num5 = 6;
var num6 = 4;
if (num5 > num6) {
  alert(num5 + " is greater than " + num6);
} else if (num5 < num6) {
  alert(num5 + " is less than " + num6);
} else {
  alert(num5 + " is equal to " + num6);
}
