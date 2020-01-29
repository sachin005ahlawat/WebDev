const socket=require("socket.io");
const http=require("http");
//http server is created
const server=http.createServer(function(req,res){});

//socket=> socket enabled
//passed by socket library
const socketServer=socket(server);

socketServer.on("connect",function(socket){
    console.log(socket.id);
    socket.on("myevent",function(data){
        console.log(data);
    });
});
server.listen(3000,function(){
    console.log("Server is listening at port no. 3000");
})