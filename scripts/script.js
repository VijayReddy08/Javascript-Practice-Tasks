// Condition - 1
var age = prompt("Enter your age:", "1");
var hasValidIdProof = prompt("Do you have a valid id proof?", "No");

if (+age >= 18 && hasValidIdProof.toLowerCase() === "yes") {
  alert("You are eligible to vote!");
} else {
  alert("You are not eligible to vote : (");
}

// Condition - 2
var battery = 19;
if (battery < 20) {
  var result = confirm("Battery is less than 20%, Switch on low power mode?");
  if (result == true) {
    alert("Switched to low power mode");
  } else {
    alert("Battery is less than 20%, Consider plugging in the charger.");
  }
}

// Condition - 3
var sleepy = prompt("fleeing sleepy?", "yes");

if (sleepy.toLowerCase() === "yes") {
  alert("Go have a coffee!");
} else {
  alert("Ok then continue working");
}

// Condition - 4
var noOfBacklogs = Number(prompt("How many backlogs do you have?"));
if (noOfBacklogs <= 1) {
  alert("Your eligible for placement drive!");
} else {
  alert("Your not eligible for placement drive : (");
}

// Condition - 5
var salary = prompt("Enter expected salary in LPA");
if (+salary < 15 && +salary > 0) {
  alert("You need to work hard");
} else if (+salary >= 15) {
  alert("You need to work every hard");
} else {
  alert("Please enter a valid salary");
}

// Condition - 6
var percentage = prompt("Enter your percentage");
if (+percentage < 70) {
  alert("You need to focus more on improving your skills");
} else {
  alert("You are eligible for Round 1");
}

// Condition - 7
var classTime = prompt("Enter class start time");

if (classTime === "9:00") {
  alert("Reach the institute by 8:50");
} else if (classTime === "9:30") {
  alert("Reach the institute by 9:20");
}

// Condition - 8
var marks = prompt("Enter your marks:");
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

// Condition - 9
var num = prompt("Enter a number to know whether it is an even or odd number");
if (+num % 2 == 0) {
  alert(num + " is an even number");
} else {
  alert(num + " is an odd number");
}

// Condition - 10
var num1 = Number(prompt("Enter a number to find the square of it"));
sq = num1 ** 2; // Method - 1
// sq = num1 * num1; // Method - 2
alert("Square of " + String(num1) + " is " + sq);
