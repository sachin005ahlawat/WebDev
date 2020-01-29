#!/usr/bin/env node    //syntax of shebang ==> it helps us to run the code in command line
var fs=require("fs");
// var os=require("os");
// console.log(os.arch());
// console.log(os.cpus());
//input
// console.log(process.argv);
const dir=process.argv[2];
// File System
if(dir==undefined){
    console.log("Kindly Enter Directory Name");
    return;
}
if(fs.existsSync(dir)==true){
    console.log("Directory Already Exist");
    return;
}
fs.mkdirSync(dir);
console.log("Directory " + dir + " has been created");
// fs.rmdirSync(dir);
// console.log("Directory "+ dir+" has been deleted")