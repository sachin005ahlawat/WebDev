// const plans = require("../model/plans.json");
const userModel = require("../model/userModel");
// const sharp=require("sharp");
// const fs=require("fs");
// const path = require("path");
const factory = require("../utility/factory.js");

// module.exports.createUser = function createUser(req, res) {
//   const user = req.body;
//   user.id = plans.length + 1;
//   users.push(user);
//   fs.writeFileSync("./data/users.json", JSON.stringify(users));
//   res.status(201).json({
//     status: "user created",
//     data: user
//   });
// };

// module.exports.getAllUser = async function getAllUser(req, res) {
//   // findone => 
//   // find => city 
//   // find=> model => document
// const users= await userModel.find().select("+password");
//   res.status(200).json({
//     status: "all users recieved",
//     data: users,
//   });
// };
// module.exports.getUser =async function getUser(req, res) {
//   // const {id} = req.params || req.body;
//   try{
//     const id=req.params.id || req.id;
//     const user=await userModel.findById(id);
//     res.json({
//       status: "User get successfully",
//       user,
//     });
//   }catch(err){
//     res.status(501).json({
//       err,
//       status: "Internal server error",
//     });
//   }
  
// };

// module.exports.updateUser =async function updateUser(req, res) {
//   const id = req.id;
//   // const originaluser = users[id - 1];
//   const toupdateData = req.body;
//   // const keys = [];
//   // for (let key in toupdateData) {
//   //   keys.push(key);
//   // }
//   // for (let i = 0; i < keys.length; i++) {
//   //   originaluser[keys[i]] = toupdateData[keys[i]];
//   // }
//   // fs.writeFileSync("./data/users.json", JSON.stringify(users));
//  const updatedUser=await userModel.findByIdAndUpdate({_id:id},toupdateDate,{new:true})
//   try{
//     res.status(200).json({
//       status: "User updated Successfully",
//       data: updatedUser
//     });
//   }catch(err){
//     res.status(501).json({
//       status: "Internal server error",
//       err,
//     });
//   }
  
// };

module.exports.updateProfileImage=async function updateProfileImage(req, res) {
  try {
    // console.log(req.file);
    let serverPath=`public/img/users/user-${Date.now()}.jpeg`
    await sharp(req.file.path)
      .resize(200, 200)
      .toFormat("jpeg")
      .jpeg({ quality: 30 })
      .toFile(serverPath);
      
// // remove file from raw
      fs.unlinkSync(req.file.path);
      serverPath = serverPath.split("/").slice(1).join("/");
      let user=await userModel.findById(req.id);
      user.profileImage=serverPath;
      await user.save({validateBeforeSave:false});

    res.status(200).json({
      status: "data uploaded successfully"
    })
  } catch (err) {
    console.log(err.message);
  }
}

// module.exports.deleteUser =async function deleteUser(req, res) {
//   // const { id } = req.params;
//   // const user = users.splice(id - 1, 1);
//   // fs.writeFileSync("./data/plans.json", JSON.stringify(users));
//   try{
//     console.log(req.id);
//     await userModel.deleteOne({_id:req.id});
//     res.status(200).json({
//     status: "User Deleted successfully",
//   });
//   }catch(err){
//     res.status(501).json({
//       status: "Internal server error",
//       err,
//     });
//   }
  
// };



module.exports.getUser = factory.getElement(userModel);
module.exports.getAllUser = factory.getAllElement(userModel);
module.exports.updateUser = factory.updateElement(userModel);
module.exports.deleteUser = factory.deleteElement(userModel);
module.exports.createUser = factory.createElement(userModel);