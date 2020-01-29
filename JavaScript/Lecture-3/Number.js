function sum(num1,num2){
    return num1+num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function difference(num1,num2){
    return num1-num2;
}

function number(num1,num2,helper){
    var message=helper(num1,num2);
    console.log(message);
}

number(3,4,sum);
number(3,4,multiply);
number(3,4,difference);

