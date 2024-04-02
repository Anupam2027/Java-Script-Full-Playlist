/* syntax of switch -----> switch (key) {
    case value:
        
        break;

    default:
        break;
} */
const month=4;
switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("fab");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;

    default:
        console.log("No any month");
        break;
}
//note:- if we remove break from switch then except default all case we will be executed
//default is given for if no any case is match then default will be executed