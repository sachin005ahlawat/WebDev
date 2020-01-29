function getLastName(fullName){
    return fullName.split(" ")[1];
}
function getFirstName(fullName){
    return fullName.split(" ")[0];
}

//Composition

function greeter(fullName,callback){
    var message=callback(fullName);
    console.log(`Hello ${message}`);
}

greeter("Steve Rogers",getFirstName);
greeter("Steve Rogers",getLastName);
