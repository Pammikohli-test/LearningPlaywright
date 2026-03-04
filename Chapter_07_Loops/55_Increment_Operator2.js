/*let a = 10;
let b = ++a;
console.log(a);
console.log(b); */

/*  Exp and Result Table
        Line No | a         | Result b
        1       | 10        | NA
        2       | 11        | 11
        3       | 11- print | 11
        4       | 11        | 11- print
*/
//let a = 10;
//console.log(a++ + a);
// A+B --> A--> a++ (Exp - 10, a-> 11)
// +
// B --> 11

/*  Exp and Result Table
        Line No | a         | Result b
        13      | 10        | NA
        14      | 11        | 21
*/

//let a = 10;
//console.log(a++ + ++a);
// A+B 
// ExpA --> 10, a-> 12
// +
// ExpB --> 12, a-> 10+12 -> 22
// a -> 12

//let a = 10;
//console.log(a++ + ++a);
//console.log(a);
// A+B --> A--> a++ (Exp - 10, a-> 11)
// ExpA --> 11, a-> 12
// +
// ExpB --> 12, a -> 12
// ExpA + ExpB -> 11+12 -> 23
// a -> 12

//let a = 10;
//console.log(a++ + ++a);
//console.log(a);

let a = 10;
//let r = a--;
let r2 = --a;
//console.log(r);
console.log(r2);



