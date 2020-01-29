console.log(variable);
var variable=10;
console.log(variable);

//function statement => Will still run if i call it before its declaration
function sayHi(){
    console.log("I would run");
}

//function expression =>Will not run or i cannot call it before its declaration
var greet=function(){
    console.log("Hell All");
};

sayHi();
greet();