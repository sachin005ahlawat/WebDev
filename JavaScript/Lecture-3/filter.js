var arr=[5,8,14,17,23,6,8];
function isOdd(x){
    return x%2==1;
}

var filterarr=arr.filter(isOdd);   
console.log(arr);
console.log(filterarr);