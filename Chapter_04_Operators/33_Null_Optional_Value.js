//let val = null;

//val = val + "Pramod";

//Just a way to safe guard
let amul = null;
let val = amul ?? " Nandini milk"; // we can give anything in default place
let val2 = null ?? "default"; // "default"(?? returns right sife if left is null/undefined)

// Modern jS - TypeScript

val = "which milk? ->" + val;
console.log(val);

// very usefull in test data handling