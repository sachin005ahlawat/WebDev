const http=require("http");
const server=http.createServer(function(req,res){
    console.log(req.url);   //path will come in req.url
    res.write("serving data from node server");
    res.end("data stream has ended");
});
server.listen(3000,function(){
    console.log("Server is listening at port 3000");
});

// if we want to use it by google then enter in address bar => hostname:port