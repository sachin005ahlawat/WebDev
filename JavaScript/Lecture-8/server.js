const http=require("http");
const server=http.createServer(function(req,res){
    if(req.url=="/home"){
        // res.write("<h1>Home Page</h1>");
        const html=require("fs").createReadStream("index.html");
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
    else if(req.url=="/dont.jpg"){
        const img=require("fs").createReadStream("dont.jpg");
        img.pipe(res);

    }
    else if(req.url=="/style.css"){
        const css=require("fs").createReadStream("style.css");
        css.pipe(res);

    }
    else{
        res.write("<h1>404 page not found</h1>");
        res.end("data stream has ended");
    }
    
});
server.listen(4000,function(){
    console.log("Server is listening at port 4000");
});