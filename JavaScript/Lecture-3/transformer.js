function doubleIt(num){
    return 2*num;
}

function transformer(arr,doubleIt){
    var result=[];
    for(var i=0;i<arr.length;i++){
        var message=doubleIt(arr[i]);
        result.push(message)
    } 
    return result;
}

var arr=[1,2,3,4,5,6];
var narr=transformer(arr,doubleIt);
console.log(arr);
console.log(narr);

