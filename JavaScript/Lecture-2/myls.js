#!/usr/bin/env node
// console.log(__dirname); //gives the path of the current dir
// console.log(process.cwd()); // gives path of current working dir in that process
var fs=require("fs");
const dirFolders=fs.readdirSync(process.cwd());
//console.log(dirFolders);
for(var i=0;i<dirFolders.length;i++){
    console.log(dirFolders[i]);
}