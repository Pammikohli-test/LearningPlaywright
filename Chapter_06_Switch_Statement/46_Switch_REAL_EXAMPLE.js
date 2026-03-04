// You are working API validation 
// responseCode : 200, 404, 401, 402, 403.....

let responseCode= 404;
switch(responseCode){
    case 200:
        console.log("200 OK");
        break;
    case 404:
        console.log("404 Resource not found!");
        break;
    default:
        console.log("No Status Code match");
        break;
}