// Condition - 1
let age = Number(prompt("Enter your age:", "1"));
let hasValidIdProof = String(prompt("Do you have a valid id proof?", "No"));

if (typeof age === "number" && typeof hasValidIdProof === "string") {
  if (+age >= 18 && hasValidIdProof.toLowerCase() === "yes") {
    alert("You are eligible to vote!");
  } else {
    alert("You are not eligible to vote : (");
  }
} else {
  alert("Kindly enter a valid value for age and id proof");
}

// Condition - 2
let battery = 19;
if (battery < 20) {
  let result = confirm("Battery is less than 20%, Switch to low power mode?");
  if (result === true) {
    alert("Switched to low power mode");
  } else {
    alert("Battery is less than 20%, Consider plugging in the charger.");
  }
}

// Condition - 3
let sleepy = String(prompt("fleeing sleepy?", "yes"));

if (typeof sleepy === "string") {
  if (sleepy.toLowerCase() === "yes") {
    alert("Go have a coffee!");
  } else {
    alert("Ok then continue working");
  }
} else {
  alert("Please answer as Yes or No");
}

// Condition - 4
let noOfBacklogs = Number(prompt("How many backlogs do you have?"));
if (typeof noOfBacklogs === "number") {
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
let salary = Number(prompt("Enter expected salary in LPA"));
if (typeof salary === "number") {
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
let percentage = Number(prompt("Enter your percentage"));
if (typeof percentage === "number") {
  if (percentage < 70) {
    alert("You need to focus more on improving your skills");
  } else {
    alert("You are eligible for Round 1");
  }
} else {
  alert("Enter a valid percentage");
}

// Condition - 7
let classTime = prompt("Enter class start time");

if (classTime === "9:00") {
  alert("Reach the institute by 8:50");
} else if (classTime === "9:30") {
  alert("Reach the institute by 9:20");
}

// Condition - 8
let marks = Number(prompt("Enter your marks:"));
if (typeof marks === "number") {
  let totalMarks = 100;
  let percentage = (marks / totalMarks) * 100;
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
let num = Number(
  prompt("Enter a number to know whether it is an even or odd number")
);
if (typeof num === "number") {
  if (+num % 2 === 0) {
    alert(num + " is an even number");
  } else {
    alert(num + " is an odd number");
  }
} else {
  alert("Enter a valid number");
}

// Condition - 10
let num1 = Number(prompt("Enter a number to find the square of it"));
if (typeof num1 === "number") {
  sq = num1 ** 2; // Method - 1
  // sq = num1 * num1; // Method - 2
  alert("Square of " + String(num1) + " is " + sq);
} else {
  alert("Enter a valid number");
}
