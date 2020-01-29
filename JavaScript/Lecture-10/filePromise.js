var ajax = require("./lib/filedownload");
//***************************************
var files = ["file1", "file2", "file3"];

var tracker = {};
function getFile(file) {
    return new Promise(function(resolve,reject){
        ajax.fakeAjax(file, function(data) {
            // what do we do here?
        resolve(data);
        console.log("Incoming File " + file + " " + data);
            // arrangeInOrder(file, data);
        });
    })
  
}
// function arrangeInOrder(file, data) {
//   tracker[file] = data;
//   // order check=>
//   for (var i = 0; i < files.length; i++) {
//     if (tracker[files[i]] == undefined) {
//       return;
//     } else {
//       if (tracker[files[i]] != true) {
//         console.log(files[i] + " : " + tracker[files[i]]);
//         tracker[files[i]] = true;
//       }
//     }
//   }
// }




// request all files at once in "parallel"
//print as soon as you receive them
// print them in seqential order

//call
const p1=getFile("file1");
const p2=getFile("file2");
const p3=getFile("file3");


//wait
p1.then(function(data){
    console.log("File1 : "+data);
    return p2;
}).then(function(data){
    console.log("File2 : "+data);
    return p3;
}).then(function(data){
    console.log("File3 : "+data);
})

// //output
// Requesting: file1
// Requesting: file2
// Requesting: file3
// The first  file's data
// The second file's data
// The third file's data
// Complete
