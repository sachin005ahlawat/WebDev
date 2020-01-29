var os=require("os");
var fs=require("fs");
module.exports.ip=function(){
    console.log(os.networkInterfaces());
}

module.exports.dir1=function(){
    console.log(fs.readdirSync(process.cwd()));
}
module.exports.dir2=function(dirname){
    console.log(fs.mkdirSync(dirname));
}