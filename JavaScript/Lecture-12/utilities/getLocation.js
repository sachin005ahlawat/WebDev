const axios=require("axios");
module.exports=async function getLocation(){
    const res=await axios.get("http://ip-api.com/json/");
    return res.data["city"];   // whatever comes from awaits in response it will be in .data 
}