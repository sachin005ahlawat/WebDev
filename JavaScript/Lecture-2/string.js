var DoubleQuotes="  I am a string  "; // we cannot use multiple lines in it.
var SingleQuotes='I am a string'  // same as above
var variable=10;

// var templateLiteral=`I am a
// string` // we can use multiple lines in it
// console.log(templateLitera); 
//but u want to add a another varibale in template literals then u have to use
// var templateLiteral=`I am a 
// string ${variable}`;
// console.log(templateLiteral);

var trimmedString=DoubleQuotes.trim(); //removes spaces from front and end not in between
console.log(trimmedString);

var strArr=trimmedString.split(" "); // use any delimeter to split the string
console.log(strArr);

var joinedArr=strArr.join("+"); //join the components of array of string with +
console.log(joinedArr);

var newString=trimmedString.replace("I","We");
newString =newString.replace("am","are");
console.log(newString);
