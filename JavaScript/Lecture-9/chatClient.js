const client=require("socket.io-client");
const readline=require("readline");
const socket=client.connect("http://localhost:3000");
const reader=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    prompt:">>"
});
console.clear;
var userName="";
reader.question(`What is your name? `,function(name){
    console.log("Hi "+ name);
    var message={};
    message.type="Joining"; //ignore this right now
    message.data=name+" has joined";
    message.userName=name;
    socket.emit("Joined",message);
    userName=name;
});
reader.on("line",function(data){
    var type=data.split(" ")[0];
    var message={};
    if(type=="private"){
        message.type="private";
        message.receiverName=data.split(" ")[1];
        message.data=userName+" : "+data.split(" ").slice(2).join(" ");
    }
    else{
        message.type="public";
        message.data=userName+" : "+data;
    }
    socket.emit("ok",message);

});

socket.on("notice",function(message){
    console.log(message);
    
});


reader.on("close",function(){
    console.log("Thank you for using");
    reader.prompt();
});









