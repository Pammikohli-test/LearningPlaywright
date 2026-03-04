/*Task#1
Write a program that classifies a triangle based on its side lengths. 
Given three input values representing the lengths of the sides, determine 
if the triangle is equilateral (all sides are equal), isosceles (exactly two sides are equal), 
or scalene (no sides are equal). Use an if-else statement to classify the triangle.
*/

let triangleclassifies;
let sidea = 15;
let sideb = 15;
let sidec = 5;

if( sidea === sideb && sideb === sidec){
    console .log("Equilateral Triangle");
}else if( sidea === sideb && sideb!= sidec){
    console .log("Isosceles Triangle");
}else {
    console .log("Scalen Triangle");
}

/* Task#2:
Create a program that determines whether a given year is a leap year. A leap year is divisible by 4, 
but not by 100 unless it is also divisible by 400. Use an if-else statement to make this determination.
  Leap year - 2008, 2012, 2016, 2020, 2024 
  Not leap year = 2025 , 2026
  */


let Year = 2026;

if(Year % 4 === 0 && (Year % 100 !==0 || Year % 400 ===0)){
        console.log("Leap Year");
} else{ 
    console.log("Not a leap year")
    }

