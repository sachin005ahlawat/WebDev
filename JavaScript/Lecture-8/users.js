const https=require("https");
const fs=require("fs");
const options={
    hostname:"jsonplaceholder.typicode.com",
    path:"/users",
    port:"443",
    method:"GET"
};
let obj="";
var count=0;
const request=https.request(options,function(response){
    response.on("data",function(data){
        obj=obj+data;   
        count++;
    });
    response.on("end",function(){
        let json=JSON.parse(obj);  // if we append a object with a string it will give us output in the form of "[object object"
        fs.writeFileSync("user.json",JSON.stringify(json)); // so we are appending a string in a string....user.json already contains a empty string
        console.log("Data stream has ended");
        console.log(count);
        });
});
request.end();