const express=require("express");
const reviewRouter=express.Router();
const{createReview,getAllReview}=require("../controller/reviewController");
reviewRouter.route("").post(createReview).get(getAllReview);
module.exports=reviewRouter;