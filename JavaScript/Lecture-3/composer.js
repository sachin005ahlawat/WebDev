var arr=[1,2,3,4,5];
function multiply(num1,num2){
    return num1*num2;
}

function composer(arr,helper){
    var total=arr[0];
    for(var i=1;i<arr.length;i++){
        total=helper(total,arr[i]);
    }
    return total;
}
var nmulti=composer(arr,multiply);
console.log(arr);
console.log(nmulti);