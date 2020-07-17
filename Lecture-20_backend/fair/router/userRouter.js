const userRouter = require("express").Router();
const multer = require("multer");
// single file upload
// const sharp = require("sharp");
const { signup, login, protectRoute, isAuthorized,forgetPassword,resetPassword } = require("../controller/authController");
const { getUser,getAllUser,deleteUser,updateUser,updateProfileImage } = require("../controller/userController");
// ///////////////////////////JSON
// const {
//   getAllUser,
//   getUser,
//   updateUser,
//   deleteUser
// } = require("../controller/userController");
// const {checkId} = require("../utility/utilityfn");
// userRouter
//   .route("")
//   .get(getAllUser)
//   .post(checkbody, createUser);

// userRouter
//   .route("/:id")
//   .get(getUser)
//   .patch(updateUser)
//   .delete(deleteUser);
// /////////////////////DB//////////////////////

const filter = function (req, file, cb) {
  if (file.mimetype.startsWith("image")) {
    cb(null, true)
  } else {
    cb(new Error("Not an Image! Please upload an image"), false)
  }
}
//storageFilter => file=> jpg,destination

const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/img/users/")
  },
  filename: function (req, file, cb) {
    cb(null, `user-${Date.now()}.jpeg`)
  }
})
// ram
const upload = multer({
  storage: multerStorage,
  fileFilter: filter
})

//  mutipart data=> everything=> image  , naming , extension => put 
userRouter.patch("/profileImage", upload.single("photo"),protectRoute, updateProfileImage)


userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.patch("/forgetPassword",forgetPassword)
userRouter.patch("/resetPassword",resetPassword)
// profile page 

userRouter.route("").get(getAllUser);

userRouter.use(protectRoute)
userRouter.get("/getMe" , getUser);
userRouter.delete("/deletMe",deleteUser);
userRouter.patch("/updateMe",updateUser);
// isAuthorized
// admin
userRouter.use(isAuthorized(["admin"]));
// userRouter.route("").get(getAllUser);
userRouter
  .route("/:id")
  // .patch(updateUser)
  .delete(deleteUser);
module.exports = userRouter;