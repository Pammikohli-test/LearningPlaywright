let testScore =85;

switch(true){ 
    case (testScore >= 95):
        console.log("Outsiding- Top performer");
        break;
    case (testScore >= 85):
        console.log("Excellent- Above Expectation");
        break;
    case (testScore >= 70):
        console.log("Good- Meets Expectations");
        break;
    case (testScore >= 50):
        console.log("Needs Improvement");
        break;
    default:
        console.log("Unsatisfactory- Requires training");
        break;
    
}