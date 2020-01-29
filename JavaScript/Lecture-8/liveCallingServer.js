const http=require("http");
const https=require("https");
const server=http.createServer(function(req,res){
    console.log(req.url);
    let wholeData="";
    let path=req.url.split("/").pop();
    const request=https.get("https://jsonplaceholder.typicode.com/users",function(resq){
        resq.on("data",function(chunk){
            wholeData+=chunk;
        });
        resq.on("end",function(){
           const userData =JSON.parse(wholeData);
            for(var i=0;i<userData.length;i++){
                if(userData[i].username==path){
                    res.write(JSON.stringify(userData[i]));
                    res.end();
                    return;
                }
            }
            res.end("User does not exist");
        });
    });
    request.end();
});
server.listen(3000,function(){
    console.log("Server was listening at port no. 3000");
});