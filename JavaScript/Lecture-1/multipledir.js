var fs=require("fs");
const dir=process.argv[2];
// File System
if(dir==undefined){
    console.log("Kindly Enter Directory Name");
    return;}
for(var i=1;i<=10;i++){
    if(fs.existsSync(dir + i)==true){
        console.log("Directory Already Exist");
        return;
    }
    fs.mkdirSync(dir + i);
    console.log("Directory " + dir +"-"+ i + " has been created");
}    

