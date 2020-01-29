const axios=require("axios");
const chalk=require("chalk");
const figlet=require("figlet");
const readline=require("readline");
const reader=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    prompt:">>"

});
console.clear();
console.log(chalk.blue(figlet.textSync("Weather App")));
console.log(chalk.cyan("Type a command(Type help to see list of all commands"));
reader.prompt();

reader.on("line",function(data){
    let cmd=data.split(" ")[1];
    if(cmd=="today"){
        async function helper(){
            const response=await axios.get("https://www.metaweather.com/api/location/search/?query=delhi");
            const woeid=response.data[0]["woeid"];
            const ans=await axios.get("https://www.metaweather.com/api/location/"+woeid+"/");
            const info=ans.data["consolidated_weather"];
            console.log("Today's New Delhi Weather is : ");
            console.log(info[0]["the_temp"]+"    "+info[0]["weather_state_name"]); 
        }
        reader.prompt();
        helper();
    }   
    else if(cmd=="forecast"){
        async function helper(){
            const response=await axios.get("https://www.metaweather.com/api/location/search/?query=delhi");
            const woeid=response.data[0]["woeid"];
            const ans=await axios.get("https://www.metaweather.com/api/location/"+woeid+"/");
            const info=ans.data["consolidated_weather"];
            for(var i=0;i<info.length;i++){
                console.log(info[i]["applicable_date"]+" - "+"Low: "+info[i]["min_temp"]+" | High: "+info[i]["max_temp"]+" | "+info[i]["weather_state_name"]);
            }
        }
        reader.prompt();
        helper();
    }   
    else{
        console.log(chalk.red("Wrong Command"));
        reader.prompt();
    }
    reader.prompt();
});
