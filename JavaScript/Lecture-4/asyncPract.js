// function downloadFile(url, downloaded) {
    // We are downloading the file here
    // var path = "C:\\Downloads\\";
    // let's assume it takes 3 seconds to download
    // accepts url of image and callback which is called when downloading is done
//   }
//   function compressFile(filePath, compressed) {
    // let's assume it takes 2 seconds to compress
    //accepts  image filepath and callback which is called when compressesion is done
//   }
//   function uploadFile(diskPath, uploaded) {
//     var uploadUrl = "http://pep/uploads";
    // We will upload this file, it takes 3 seconds,
    // let's assume it takes 3 seconds to upload
    //accepts  image filepath and callback which is called when uploading is done
//   }
  //downloadFile("http://google.com/logo.png",downloaded);
  // url:http://google.com/logo.png
  // output:
  // Downloading file from: http://google.com/logo.png
  // File saved to: C:\Downloads\logo.png
  // We are compressing: C:\Downloads\logo.png
  // File compressed to: C:\Downloads\logo-resized.png
  // Uploading to: http://pep/uploads
  // File successfully uploaded to: http://pep/uploads/logo-resized.png
  // Task completed



function downloadFile(url,downloaded){
    console.log("Downloading file from : "+ url);
    var path="C:\Downloads\\";
    var img=url.split("/").pop();
    var dImg=path+"\\"+img;
    setTimeout(function(){
        downloaded(dImg);
    },3000);
}
function compressFile(filePath,compressed){
    console.log("We are compressing: "+filePath);
    var ext=filePath.split(".").shift();
    var cImg=ext+"-resized.png";

    setTimeout(function(){
        compressed(cImg);
    },2000);

}
function uploadFile(diskPath,upload){
    var uploadUrl="http://pep/uploads";
    console.log("Uploads To: "+uploadUrl);
    var img = diskPath.split("\\").pop();
    var uImg=uploadUrl+"/"+img;
    setTimeout(function(){
        upload(uImg);
    },3000);
}
function upload(uImg){

    console.log("File successfully uploaded to: " + uImg);
    console.log("Task Completed");
}

function compressed(cImg){
    
    console.log("Compression is Done: " + cImg);
    uploadFile(cImg,upload);
}

function downloaded(dImg){
    console.log("File Saved to " + dImg);
    compressFile(dImg,compressed);
    
}


downloadFile("http://google.com/logo.png",downloaded);