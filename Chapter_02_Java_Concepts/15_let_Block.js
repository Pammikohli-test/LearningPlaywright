let a= "Pramod"; //Global variable

if(true){
    console.log(a); //local variable, TDZ
    let a= "temp";
}


// Global value is avialable until local variable is available. 1st preference is given to local
