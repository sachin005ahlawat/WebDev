var readline=require("readline");
var chalk=require("chalk");
var figlet=require("figlet");
var reader=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    prompt:">"
});
console.clear();
console.log(chalk.blue(figlet.textSync("CMD")));
console.log(chalk.cyan("Type Your Commands : "))
var libfn=require("./cmdServer");
reader.prompt();
reader.on("line",function(data){
    var cmd=data.split(" ")[0];
    var sArr=data.split(" ");
    sArr.shift();
    if(cmd=="ipconfig"){
        console.log(chalk.magenta("Windows IP Configuration: "))
        libfn.ip();
    }
    else if(cmd=="readDir"){
        libfn.dir1();
    }
    else if(cmd=="mkdir" && sArr.length>0){
        console.log(chalk.green("New folder is created"));
        libfn.dir2(sArr[0]);
    }
    else{
        console.log(chalk.red("Command is wrong"))
    }

    reader.prompt();
}) 
