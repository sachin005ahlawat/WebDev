var arr=[1,2,3,4,5];
var newarr=[];
var len=arr.length;
for(var i=0;i<len;i++){
    var poppedValue=arr.pop();
    newarr.push(poppedValue);
}
console.log(newarr);