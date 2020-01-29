var arr=[
        1,
        1.1,
        true,
        null,
        "Steve",
        undefined,
        [1,2,3,4,5],
        function fninsidearray() {
            console.log("I am a function inside an array");
        },
        {
            name:"Steve"  // object
        }
    ];
// arr[95]="some value";
// console.log(arr[44]);
// console.log(arr.length);
// console.log("````````````````````````````");

// //addFirst
// arr.unshift("First Value");
// console.log(arr);
// console.log("````````````````````````````");

// //Delete First value
// arr.shift();
// console.log(arr);
// console.log("````````````````````````````");

// //addLast
// arr.push("Last Value");
// console.log(arr);
// console.log("````````````````````````````");

// //Remove Last
// arr.pop();
// console.log(arr);

// //Slice the array but copy a new array does not change in original array
// var newarr=arr.slice(4,7); // takes starting index and end index and deleted the items from starting to one less than ending index
// console.log(newarr);
// console.log("***********");
// console.log(arr);

// //Slice the array but changes in the original one also
// var splicearr=arr.splice(4,2); // it takes starting index and the number of items to be deleted from starting index
// console.log(splicearr);
// console.log("**************");
// console.log(arr);

//For searching a value in a array
// var search=arr.includes("Steve");
// console.log(search);

//Note => No concept of array in JS, they are also objects
// for(var key in arr){
//     console.log(key + " : " + arr[key]);
// }
arr["9"]="some value";

arr["some value"]="something";
for(var key in arr){
    console.log(key + " : " + arr[key]);
}



