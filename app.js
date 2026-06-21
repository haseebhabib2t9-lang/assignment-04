alert("Assalamualaikum! Welcome to my website");
var username = prompt("what is your name")
var age =prompt("How old are you")
document.write("Hello " + username + "! You are " + age + " years old.");
if(age < 13){
    document.write("child")
}
else if(age < 18){
     document.write("Teenager")
}
else{
    document.write("Adult")
}

alert("Give us some marks to calculate your percentage and grade")

let english = +prompt("Enter English Marks:");
let mathematics = +prompt("Enter Mathematics Marks:");
let physics = +prompt("Enter Physics Marks:");
let chemistry = +prompt("Enter Chemistry Marks:");
let computerScience = +prompt("Enter Computer Science Marks:");
let urdu = +prompt("Enter Urdu Marks:");
let islamiat = +prompt("Enter Islamiat Marks:");

let totalMarks =
  english +
  mathematics +
  physics +
  chemistry +
  computerScience +
  urdu +
  islamiat;

let percentage = (totalMarks / 700) * 100;

let grade;
let remarks;

if (percentage >= 80) {
  grade = "A+";
  remarks = "Excellent Performance";
} else if (percentage >= 70) {
  grade = "A";
  remarks = "Very Good";
} else if (percentage >= 60) {
  grade = "B";
  remarks = "Good";
} else if (percentage >= 50) {
  grade = "C";
  remarks = "Average";
} else if (percentage >= 40) {
  grade = "D";
  remarks = "Need Improvement";
} else {
  grade = "Fail";
  remarks = "Work Hard and Try Again";
}

document.write("<h2>Marksheet</h2>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks);
