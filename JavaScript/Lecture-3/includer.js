var arr=[5,8,14,17,23,6,8];
function isOdd(x){
    return x%2==1;
}

function includer(helper,arr){   
    var narr=[];
    for(var i=0;i<arr.length;i++){
        if(isOdd(arr[i])==true){    //we can use filter instead of this
            narr.push(arr[i]);
        }
    }
    return narr;
}

var narr=includer(isOdd,arr);
console.log(arr);
console.log(narr);