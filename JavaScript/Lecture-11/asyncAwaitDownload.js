function downloadFile(url,downloaded){
    console.log("Downloading file from : "+ url);
    var path="C:\Downloads\\";
    var img=url.split("/").pop();
    var dImg=path+"\\"+img;
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(dImg);
        },3000);
    })
}
function compressFile(filePath,compressed){
    console.log("We are compressing: "+filePath);
    var ext=filePath.split(".").shift();
    var cImg=ext+"-resized.png";
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(cImg);
        },2000);
    })

}
function uploadFile(diskPath,upload){
    var uploadUrl="http://pep/uploads";
    console.log("Uploads To: "+uploadUrl);
    var img = diskPath.split("\\").pop();
    var uImg=uploadUrl+"/"+img;
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(uImg);
        },3000);
    })
    
}
// basically it removes the nesting and increase the readiablity of a code if we use promises
async function helper(){
    const dImg=await downloadFile("http://google.com/logo.png")
        console.log("File Saved to " + dImg);
    const cImg = await compressFile(dImg);
        console.log("Compression is Done: " + cImg);
    const uImg= await uploadFile(cImg);
        console.log("File successfully uploaded to: " + uImg);
        console.log("Task Completed");
}
helper();





