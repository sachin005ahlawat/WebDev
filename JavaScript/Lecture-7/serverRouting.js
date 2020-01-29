const http=require("http");
const html=require("fs").createReadStream("index.html");
const server=http.createServer(function(req,res){
    if(req.url=="/home"){
        // res.write("<h1>Home Page</h1>");
        html.pipe(res);
        //no need to end stream=>pipe done it by its own
    }
    else if(req.url=="/about"){
        res.write("<h1>About Page</h1>");
        res.end("data stream has ended");
    }
    else if(req.url=="/contact"){
        res.write("<h1>Contact Page</h1>");
        res.end("data stream has ended");
    }
    else{
        res.write("<h1>404 page not found</h1>");
        res.end("data stream has ended");
    }
    
});
server.listen(4000,function(){
    console.log("Server is listening at port 4000");
});