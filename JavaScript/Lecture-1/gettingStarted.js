//Dynamically Typed
//Primitive types=> Number,Strings,undefined,boolean,null
// var variable;
// console.log(variable); // output will be undefined
// var variable="Hello All";
// console.log(variable); //output is Hello All
// variable=10;
// variable=true;
// variable=null;
// console.log(variable); //output is null

// for(var i=0;i<=10;i++){
//     // console.log(i); // every number will be printed in next line
//     process.stdout.write("Number is"+ i);  // every number will br printed in same line
// }


// in python functions are also variables
//var print=console.log();
// now we can use print everywhere instread of console.log

//Non-primitive types=> Arrays,Functions,Objects
//Arrays=> Collection of anything
// var arr=[
//     1,
//     1.1,
//     true,
//     null,
//     "Steve",
//     undefined,
//     [1,2,3,4,5],
//     function fninsidearray() {
//         console.log("I am a function inside an array");
//     },
//     {
//         name:"Steve"  // object
//     }
// ];
// console.log(arr);
// console.log(arr[6]);
// console.log(arr[6][2]);
// arr[7](); // way to open the code of a fucntion
// console.log(arr[8]);


// Objects=> {name:value}
var cap={
    firstName:"Steve",
    lastName:"Rogers",
    age:45,
    friends:["Tony","Bruce","Peter"],
    address:{
        state:"New York",
        city:"Manhatten"
    },
    sayHi:function(){
        console.log("Cap says Hi");
    }
};

// console.log(cap);
// value=>property
// console.log(cap.firstName);
//functions in objects are called methods

// cap.sayHi(); //way to print function code

