var myvar=1;
variable=10;   //global object
function a(){
    // var myvar; 
    console.log(myvar);  // it will use outer environment variable if no local variable is present
    console.log(variable);   // it will print 20
}

function b(){
    var myvar=2;
    variable=20;   //value is changed and overwrite by 20
    console.log(myvar);
    a();
}
console.log(myvar);
b();