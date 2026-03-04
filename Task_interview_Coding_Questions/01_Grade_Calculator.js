/* Task for 21 Feb 2026
Q1. Write a program that calculates and displays the letter grade for a given 
numerical score (e.g., A, B, C, D, or F) based on the following grading scale:
A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59 */

let grade;
let score = 75;

if(typeof score !== "number"){
    console.log("Invalid input, enter numbers only")
    return;
}
 if (score < 0 || score > 100){
    console.log("Invalid input, input cannot be negative number")
    return;
 }

if (score >=90){
    console.log("Grade A");

}else if(score >=80){
    console.log("Grade B");

}else if(score >=70){
    console.log("Grade C");

}else if(score >=60){
    console,log("Grade D");

}else if(score >=0){
    console.log("Grade F");

}
    console.log("For the score", score);