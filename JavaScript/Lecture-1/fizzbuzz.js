
var variable=20;
for(var i=1;i<=20;i++){
    if(i%3==0 && i%5==0){
        console.log("Fizz Buzz")
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz")
    }
    else{
        console.log(i);
    }
}