const socket=require("socket.io");
const http=require("http");
const server=http.createServer(function(req,res){});
const io=socket(server);

var database={};
io.on("connect",function(socket){
    socket.on("Joined",function(message){
        console.log(message.userName+" has joined");
        database[message.userName]=socket.id;
        socket.broadcast.emit("notice",message.data);
    });
    socket.on("ok",function(message){
        if(message.type=="private"){
            socket.to(`${database[message.receiverName]}`).emit("notice",message.data);
        }
        else{
            socket.broadcast.emit("notice",message.data);
        }
        
    });
});

server.listen(3000,function(){
    console.log("Server is listening at port mo. 3000");
})


