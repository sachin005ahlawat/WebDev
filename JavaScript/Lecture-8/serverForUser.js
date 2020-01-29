const http=require("http");
const file=require("./user.json");
const server=http.createServer(function(req,res){
    console.log(req.url);
let path=req.url.split("/").pop();
for(var i=0;i<file.length;i++){
    if(file[i].username==path){
        res.write(JSON.stringify(file[i]));
        res.end();
        return;
    }
}
res.end("User does not exist");
    

});
server.listen(5000,function(){
    console.log("Server is listening at port no 5000");
})