var fs=require("fs");
var file=fs.readFileSync("user.json"); //if we require the user.json file instead of readfilesync then we will get data in json format
var json=JSON.parse(file);


// //with JSON.stringify function
// createUser(json);
// function createUser(json){
//     for(var i=0;i<json.length;i++){
//         fs.writeFileSync(json[i]["username"]+".json",JSON.stringify(json[i]));
//     }
// }
//JSON.stringify converts a object into a string


//if we do not want to use JSON.stringify function then
createUser();
function createUser(){
    var json=require("./user.json");
    for(var i=0;i<json.length;i++){
        let userData="";
        for(let key in json[i]){
            userData=userData+key+":"+json[i][key];
        }
        fs.writeFileSync(json[i]["username"]+".json",userData);
    }
}
