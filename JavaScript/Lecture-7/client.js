const http=require("http");
const options={
    hostname:"127.0.0.1",
    path:"/users",
    port:"3000",
    method:"GET"
};
const req=http.request(options,function(res){
    res.on("data",function(data){
        console.log("data event was called");
        console.log(data+"");
    });
    res.on("end",function(){
        console.log("end event was called");
    });
});
req.end();