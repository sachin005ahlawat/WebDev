// Dowloading a file taking 3sec to download

function downloadFile(url){
    console.log("Downloading file from : "+ url);
    var path="C:\Downloads\\";
    var img=url.split("/").pop();
    var dImg=path+"\\"+img;
   return new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(dImg)
    },3000);
   }); 
}

const promise=downloadFile("http://google.com/logo.png");
promise.then(function downloaded(dImg){
    console.log("File Saved to " + dImg);
});
promise.catch(function downloaded(error){
    console.log(error);
})