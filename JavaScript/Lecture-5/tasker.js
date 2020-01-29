var readline=require("readline");
var chalk=require("chalk");
var figlet=require("figlet");
var reader=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    prompt:">"
});
console.clear();
console.log(chalk.blue(figlet.textSync("Tasker")));
console.log(chalk.cyan("Type a command(Type help to see list of all commands"));
reader.prompt();
var tasks=[];
reader.on("line",function(data){
    var cmd=data.split(" ")[0];
    var sArr=data.split(" ");
    sArr.shift();
    if(cmd=="help"){
        console.log(`Available Commands
        1. add task_name
        2. ls (to all tasks)
        3.delete id (enter task id to delete it)`);
        reader.prompt();
    }
    else if(cmd=="add" && sArr.length>0){
        tasks.push(sArr.join(" "));
        console.log(chalk.green("one task added"));
        reader.prompt();
    }
    else if(cmd=="ls"){
        console.log(chalk.magenta("Tasks"));
        for(var i=0;i<tasks.length;i++){
            console.log(i+1+". "+tasks[i]);
        }
        reader.prompt();
    }
    else if(cmd=="delete" && sArr.length>0){
        var id=Number.parseInt(sArr[0]);
        tasks.splice(id-1,1);
        console.log(chalk.yellow("Id Deleted"));
        reader.prompt();
    }
    else{
        console.log(chalk.red("Wrong Command"));
        reader.prompt();
    }
})
