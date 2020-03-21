const express = require('express'); //to require the express modules
const app = express(); // to create a express server
const server = require('http').Server(app);
var io = require('socket.io')(server);
// const io=socketServer(app);

app.use(express.static('public'));
// app.get("*",function(req,res){
//     res.end("<h1>404 page not found</h1>")
// })
io.on("connection",function(socket){
    //(joined) client->server
    console.log(socket.id);
    socket.on("mymousedown",function(point){
        socket.broadcast.emit("mymousedown",point)
    })
    socket.on("mymousemove",function(point){
        socket.broadcast.emit("mymousemove",point)
    })
    socket.on("mymouseup",function(){
        socket.broadcast.emit("mymouseup")
    });
});   
//GET ,POST, DELETE, PATCH
server.listen(3000,function(){
    console.log("server is listening at port 3000");
});

