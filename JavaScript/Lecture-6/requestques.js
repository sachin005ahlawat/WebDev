// URL => https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
const https=require("https");
const fs=require("fs");
const img=fs.createWriteStream("img.jpg");
const options={
    hostname:"api.nasa.gov",
    path:"/planetary/apod?api_key=DEMO_KEY",
    method:"GET",
    port:"443"
};
let image="";

const request=https.request(options,function(response){
    response.on("data",function(data){
        image=image+data;
    });
    response.on("end",function(){
       //https.get breaks the url in options just pass the url in it
       var json=JSON.parse(image);
       const url=json.url;
    //    let img="";
        const anotherReq=https.get(url,function(response){
            // response.on("data",function(imgData){
            //     img=img+imgData
            // });
            // response.on("end",function(){
            //     fs.writeFileSync("img.jpg",img);
            // });

            response.pipe(img); //  
        });
        anotherReq.end();
    });
});
request.end();

//imageURL=> https://apod.nasa.gov/apod/image/2001/aurora_vetter_1080.jpg


