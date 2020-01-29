const axios=require("axios");
const readline=require("readline");

module.exports=async function getRawWeather(location){
    const response=await axios.get("https://www.metaweather.com/api/location/search/?query="+location);
    const woeid=response.data[0]["woeid"];
    const ans=await axios.get("https://www.metaweather.com/api/location/"+woeid+"/");
    return ans.data["consolidated_weather"]; 
}     