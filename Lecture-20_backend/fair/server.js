const express = require("express");
const path=require("path");
// server create
const app = express();

const env=require("./config/secrets")["process.env.NODE_ENV"];
const cookieParser=require("cookie-parser");
const userRouter = require("./router/userRouter");
const planRouter = require("./router/planRouter");
const viewRouter=require("./router/viewRouter");
const reviewRouter=require("./router/reviewRouter");
const bookingRouter=require("./router/bookingRouter");
const ErrorExtender=require("./utility/ErrorExtender")
const globalErrorHandler=require("./utility/globalErrorHandler")
//global object => heroku => set variable || dev
process.env.NODE_ENV=process.env.NODE_ENV || "dev"


// 1.middleware
// app.use(function f1(req, res, next) {
//   console.log("middleware that ran before express.json in f1" + req.body);
//   next();
// });

// ``````````````````````````````````````Middlewares``````````````````````````````````````
app.use(express.json());
app.use(cookieParser());
// 1. static folder
app.use(express.static("public"))
// express => rendering / templating engine
app.set("view engine","pug");
// view => directory
app.set("views", path.join(__dirname,"view"));

app.use("/api/plans", planRouter);
app.use("/api/users", userRouter);
app.use("/api/reviews",reviewRouter);
app.use("/api/bookings",bookingRouter);
app.use("/",viewRouter);

//wildcard
//404 Not Found route => error
app.use("*",function(req,res){
  err=new ErrorExtender ("Page Not Found",404);
  // express feature => error pass for error handeling
  next(err);
})

app.use("*", globalErrorHandler);
//  server add env variable => hosting => single mutiple server host 

const port=process.env.PORT||4000
app.listen(port, function () {
  console.log("Server has started at port 4000");
});

//3.
// app.use(function f2(req, res, next) {
//   console.log("middleware that ran after express.json  in f2");
//   console.log(req.body);
//   next();
// });
// checkId