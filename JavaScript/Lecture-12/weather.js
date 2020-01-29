const today=require("./commands/today");
const forecast=require("./commands/forecast");
const help=require("./commands/help");
const version=require("./commands/version");
const minimist=require("minimist");    // used to take input in a different manner

const input=minimist(process.argv.slice(2));
// console.log(input);
const location=input.location||input.l;
const cmd=input["_"][0];
// console.log(cmd);
if(cmd=="today"){
    today(location);
}
else if(cmd=="forecast"){
    forecast(location);
}
else if(cmd=="help"){
    help();
}
else if(cmd=="version"){
    version();
}
else{
    console.log("Wrong Command");
}