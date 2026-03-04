
switch(x){
    case a: 
    let b1 = 1;
    break;

    case a: 
    let b2 = 1;
    break;
}

/* in above code
 x is not defined
  let- two let is not allowed
  we canot have duplicate case
  case a- a is value and should be match with value

  */

let x = 10;
  switch(x){
    case 10:     // we can have same condition in JavaScript, but not in Java
        let b1 = 1;
        console.log("b1");
        break;
    case 10:     
        let b2 = 1;
        console.log("b2");
        break;
    default:
        console.log("d");    
}

// it will execute the first condition.
// it will allow the duplicate case with first usage.