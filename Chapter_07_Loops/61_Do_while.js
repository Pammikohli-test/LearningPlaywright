let retry = 0;

do{
    console.log("Execute a code");
    console.log("Retrying......", retry);
    retry++;
}while(retry <3);

// It will execute first the check for condition.

let a = 10;
while(a >10){
    console.log(a);
    a++;
}
// here a is not greater tha 10(a/c condition- a>10 where a= 10)
// so, it will not execute and it will exit automatically from loop.

let a1= 10;
do {
    console.log(a1);
    a1++;
}while(a <10);

// Here it will executes first then checks for the condition.
