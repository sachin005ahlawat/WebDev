const getLocation=require("../utilities/getLocation");
const getRawWeather=require("../utilities/getRawWeather");
const axios=require("axios");

module.exports=async function(location){
    const city= location || (await getLocation());
    const info=await getRawWeather(city);
    console.log("Today's New Delhi Weather is : ");
    console.log(Math.floor(info[0]["the_temp"])+"    "+info[0]["weather_state_name"]);
}            