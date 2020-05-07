const mongoose=require("mongoose");

const cryto = require("crypto");
// mongoose => promise based library
// connection
const secrets = require("../config/secrets");
mongoose
  .connect(secrets.DB_LINK, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(function (db) {
    // console.log(db);
    console.log("reviewDB connected");
  })
  .catch(function (err) {
    console.log(err);
  });


const reviewSchema=new mongoose.Schema({
    review: {
       type: String,
       require:[true,"Review can't be empty"]
    },
    rating:{
        type:Number,
        min:1,
        max:10,
        required:[true,"Review must contain some rating"]
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    plan:{
        type:mongoose.Schema.ObjectId,
        ref:"newPlanModel",
        required:[true,"Review must belong to plan"]
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"NewUserModel",
        required:[true,"Review must have some user"]
    }
})
const reviewModel=mongoose.model("reeviewMode",reviewSchema);
module.exports=reviewModel;