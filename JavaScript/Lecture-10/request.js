//axios => a library in http used to make a request
var axios= require("axios");
var promise=axios.get("http://github.com");
console.log(promise);
promise.then(function(data){
    console.log(data);
})
promise.catch(function(error){
    console.log(error);
})
  