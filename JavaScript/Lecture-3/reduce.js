var arr=[1,2,3,4,5];
function multiply(num1,num2){
    return  num1*num2;
}

var product=arr.reduce(multiply);   // gives product of whole array
console.log(arr);
console.log(product);