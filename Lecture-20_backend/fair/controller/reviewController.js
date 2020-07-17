const reviewModel = require("../model/reviewModel");
//createReview , getAllReview
const factory = require("../utility/factory.js");

// async function createReview(req,res){
//     try{
//         const review=await reviewModel.create(req.body);
//         res.status(201).json({
//             review
//         })

//     }catch(err){
//         res.status(200).json({
//             err:err.message
//         })
//     }
// }

// async function getAllReview(req,res){
//     try{
//         const review=await reviewModel.find().populate({
//             path:"user",
//             select:"name profileImage"
//         }).populate("plan");
//         res.status(201).json({
//             review
//         })

//     }catch(err){
//         res.status(200).json({
//             err:err.message
//         })
//     }
// }

// module.exports.createReview=createReview;
// module.exports.getAllReview=getAllReview;


module.exports.getReview = factory.getElement(reviewModel);
module.exports.getAllReview = factory.getAllElement(reviewModel);
module.exports.updateReview = factory.updateElement(reviewModel);
module.exports.deleteReview = factory.deleteElement(reviewModel);
module.exports.createReview = factory.createElement(reviewModel);