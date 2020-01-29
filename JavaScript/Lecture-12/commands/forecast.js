const getLocation=require("../utilities/getLocation");
const getRawWeather=require("../utilities/getRawWeather");


module.exports=function(){
    const location=getLocation();
    const info=getRawWeather(location);
    for(var i=0;i<info.length;i++){
        console.log(info[i]["applicable_date"]+" - "+"Low: "+info[i]["min_temp"]+" | High: "+info[i]["max_temp"]+" | "+info[i]["weather_state_name"]);
    }
}