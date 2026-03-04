// true
if ("hello") console.log("String is truthy"); // strings are always truthy
if (43) console.log("Number is truthy"); // int /number are always truthy
if ({}) console.log("Empty object is truthy"); // empty object are always truthy

// Why does if([]) evaluate to true even though the array is empty?
if ([]) console.log("Empty array is truthy"); // thruthy- array are considered as object and all objects are truthy in JS 


//false result
if ("") console.log("Won't Print");   // empty strings are always false in JS
if (null) console.log("Won't Print"); // null strings are always false in JS -it will not print
if (undefined) console.log("Won't Print"); // undefined -it will not print
if (NaN) console.log("Won't Print"); // NaN -are always false in JS- it will not print
if ("0") console.log("Won't Print"); // 0 -are always gives false result and truthy starts always from 1 in JS

