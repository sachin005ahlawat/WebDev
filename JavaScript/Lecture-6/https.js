const https=require("https");
const options={
    hostname:"jsonplaceholder.typicode.com",
    path:"/users",
    port:"443",
    method:"GET"
};
var count=0;
const request=https.request(options,function(response){
    response.on("data",function(data){
        console.log(""+data);   //if we concatinate data with a string then data is converted into string from binary
        count++;
    });
    response.on("end",function(){
        console.log("Data stream has ended");
        console.log(count);
        });
});
request.end();