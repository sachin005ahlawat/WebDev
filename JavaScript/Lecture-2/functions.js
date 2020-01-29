// function statement
function sayHi(){
    console.log("Say Hi");
}
sayHi();

//Function Expression
var greeter=function(){
    console.log("Hi i am a function expression");
}
greeter();

//IIFEE => Immediately invoked function expression
(function(){
    console.log("Board has been loaded as soon as page is loaded");
})();