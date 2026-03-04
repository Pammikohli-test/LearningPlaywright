//Interview Question
// Q1.Figure the given code below is wheteher it is hot code or not

console.log("Hello World"); //-no it is not hot code


//Q2.Figure the given code below is wheteher it is hot code or not

function add(a,b) {
    return a+b;
}
let result;
for (let i=0; i<10000; i++){
    result=add(i,i+1)
}  
console.log("After 10000 calls:", result);

// Yes it id hot code becoz it has functiona and loops.

