for( let somya = 0; somya < 10; somya++){
    console.log(somya);
}
// 0-9 and execute/run- 10 times

for( let _1 = 0; _1 <= 10; _1++){
    console.log(_1);
}
// 0-10 and execute/run - 11 times

for( let pramod; pramod > 1; pramod++){
    console.log(pramod);
}
//here the above code will not execute becoz
// 1--> pramod- is not initialized
// 2--> pramod > 10- condition is falsy

for( let pramod = 0; pramod > 1; pramod++){
    console.log(pramod);
}
//here the above code will not execute becoz
// 2--> pramod > 10- condition is falsy

//for( let pramod = 0; pramod++) {
 //   console.log(pramod);
//}
//here the above code will execute becoz but infinite times
// as condition is not there 
// do not run the infinite code as it hangup the vscode

for( let somya = 0; somya < 18; somya++){
    if (somya > 15){
        console.log("Gift from papa, iphone this year");
    }else{
        console.log("No Gift, iphone only barbie doll");
    }
}

for (let i = 0; i > 10;){
    console.log("Hello");
}
// It will not print becoz condition (i>10)is falsy
// as 0>10