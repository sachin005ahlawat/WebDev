console.log("Before");
function greet(){    // =>this function is called asynchrous function=> this will wait in windows API
    console.log("Hello All");  
}
setTimeout(greet,5000);
console.log("After");
for(var i=0;i<=10;i++){
    console.log(i);
}
