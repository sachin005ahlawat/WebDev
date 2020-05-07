const express=require("express");
const app=express();
//mongoose
const mongoose=require("mongoose");
//mongoose => promise based library

//mongoose connect
mongoose
    .connect("mongodb+srv://daddy:obQ0CGF7orCEDhFE@cluster0-n3mdz.mongodb.net/test?retryWrites=true&w=majority",
    {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true}
)
.then(function(db){
    console.log("Database is connected");
})
.catch(function(err){
    console.log(err);
})
app.listen(3000,function(){
    console.log("App is listening at port 3000");
})

//define schema
let userSchema=new mongoose.Schema({
    name:String,
    email:String,
});

//define models
const userModel=mongoose.model("DemoUserModel",userSchema);

//DemoUserModel
const newUser=new userModel({
    name:"Steve",
    email:"abc@gmail.com",
    phone:123456,
});
newUser
    .save()
    .then(function(){
        console.log("A user in usermodels");
    })
    .catch(function(err){
        console.log(err);
    })