// app.vwo.com ---> Viewer, Editor, Admin
// Viewer ---> limited View
// Editor ---> Editor can edit and view
// Admin ---> Admin can do anything

let isLoggedIn = true;
let userRole = "Editor";

if (isLoggedIn){
    if(userRole === "Admin"){
        console.log("Welcome Admin- Admin can access anything");

}else if(userRole === "Editor"){
    console.log("Welcome Editor- Edit and view access granted");

}else if(userRole === "Viewer"){
    console.log("Welcome Viewer- Read only access");

}else{
    console.log("No idea which Role you are");

   }//else{ 
    //console.log("You are not loggedin");
   //}
}
