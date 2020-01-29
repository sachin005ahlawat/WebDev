var arr=[1,2,3,4,5,6];
function doubleIt(num){
    return 2*num;
}

var narr=arr.map(doubleIt); //map transforms the whole array by implementing that function

console.log(arr);
console.log(narr);