//class
var EventEmitter=require("events");
//instance=>or making and object of class EventEmitter
var eventMaker=new EventEmitter();

//=>consume
//server
eventMaker.on("submit",function(email,password){
    console.log(email+" "+password);
});
eventMaker.on("submit",function(email){  //we can consume multiple on by making one event
    if(email=="abc@gmail.com"){
        console.log("Welcome Admin");
    }
    else{
        console.log("Welcome user");
    }
})

eventMaker.on("click",function(){
    console.log("I was called");
    eventMaker.emit("submit","abc@gmail.com","2345678");
});

// create => emit

//form submit
//client1

// //client2
// eventMaker.emit("submit","abcd@gmail.com","2345678");
// //client1
// eventMaker.emit("submit","abcde@gmail.com","2345678");

eventMaker.on("submit",function(){
    console.log("I was 3rd submit");
    console.log("****************************");
})

eventMaker.emit("click");
eventMaker.emit("submit","abc@gmail.com","2345678");