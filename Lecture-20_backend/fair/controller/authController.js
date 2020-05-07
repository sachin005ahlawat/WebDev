// db 
const nodemailer = require("nodemailer");
const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");
const emailHelper=require("../utility/sendEmail");

async function signup(req, res) {
  try {
    console.log(req.body);
    const newUser = await userModel.create(req.body);
    // sendEmail(newUser).then(function(){
    //   console.log("email has been send successfully")
    // }).catch(function(err){
    //   console.log(err)
    // })
    
    let options = {
      from:"foodcatchers@gmail.com",
      html:"Welcome to food Catchers",
      subject: "Signed to food catchers"
    }
    await emailHelper(options);
    
    res.status(201).json({
      status: "user Signedup",
      newUser,
    });
  } catch (err) {
    res.status(500).json({
      status: "user can't be created",
      err,
    });
  }
}
// token create
// payload => user id
async function login(req, res) {
  try {
    if (req.body.email && req.body.password) {
      // find user
      const user = await userModel.findOne({ email: req.body.email }).select("+password");
      if (user) {
        // console.log(user);
        if (user.password == req.body.password) {
          const id = user["_id"];
          const token = jwt.sign({ id }, secrets.JWT_SECRET);
          // header
          res.cookie("jwt", token, { httpOnly: true });
          return res.status(200).json({
            status: "userLogged In",
            user,
            token,
          });
        } else {
          throw new Error("email or password didn't match ");
        }
      } else {
        throw new Error("User not found");
      }
    }

    throw new Error("Invalid Input");
  } catch (err) {
    // console.log(err);
    return res.status(500).json({
      status: "user can't be loggedIn",
      err,
    });
  }
}
async function logout(req, res) {
  // token => loggedIN
  res.cookie("jwt", "wrongtoken", { httpOnly: true });
  res.status(200).json({
    status: "user LoggedOut"
  })

}

// It verifies
async function protectRoute(req, res, next) {
  
  try {
    let token;
    if (req.headers.authorization) {

      token = req.headers.authorization.split(" ").pop();
    }
    else if(req.cookies.jwt){
      token=req.cookies.jwt;
    }
    
    if (token) {
      const payload = jwt.verify(token, secrets.JWT_SECRET);
      
      if (payload) {
        // user id 
        const user = await userModel.findById(payload.id);
        req.role = user.role;
        // console.log(req.role);
        req.id = payload.id
        next();
      } else {
        throw new Error("Token is modified please login again");
      }
    } else {
      throw new Error("Please login first");
      
    }
  } catch (err) {
    let clientType=req.get("User-Agent");
    if(clientType.includes("Mozilla")==true){
      //backend express
      return res.redirect("/login");
    }
    else{
      res.status(500).json({
        err:err.message,
      });
    }
  }
}

async function isUserLoggedIn(req, res, next) {
  try {
    let token;
    if(req.cookies.jwt){
      token=req.cookies.jwt;
    }
    
    if (token) {

      const payload = jwt.verify(token, secrets.JWT_SECRET);
      if (payload) {
        // user id 
        // console.log(payload)
        const user = await userModel.findById(payload.id);
        req.role = user.role;
        req.id = payload.id
        req.userName=user.name;
        next();
      } else {
        next();
      }
    } else {
      next();
    }
  } catch (err) {
    next();
  }
}


function isAuthorized(roles) {
  return function (req, res,next) {
    // console.log(req.role);
    if (roles.includes(req.role) == true) {
      next()
    } else {
      res.status(403).json({
        status: "user not allowed"
      })
    }
  }
}

async function forgetPassword(req, res) {
  let { email } = req.body;
  try {
    const user = await userModel.findOne({ email: email });
    if (user) {
      // create token
      const id = user["_id"];
      const token = jwt.sign({ id }, secrets.JWT_SECRET);
      // const resetToken = user.createResetToken();
      // console.log(resetToken);
// confirm password
      await user.save({ validateBeforeSave: false });
      //     // header
      // res.cookie("jwt", resetToken, { httpOnly: true });
      resetPath = "http://localhost:3000/resetPassword?t="+token;
      // sendEmail(resetPath).then(function(){
      //   console.log("email has been send successfully")
      // }).catch(function(err){
      //   console.log(err)
      // })
      let options = {
        from:"foodcatchers@gmail.com",
        html:resetPath,
        subject: "Link to reset password"
      }
      await emailHelper(options);
      res.status(200).json({
        resetPath,
        status: "Token send to your email"
      })
    } else {
      throw new Error("User not found");
      // next();
    }

  } catch (err) {
    console.log(err);
    res.status(400).json({
      err,
      status: "cannot reset password"
    }
    )
  }

}


async function resetPassword(req, res) {
  try {
      const {token}= req.body;
    if(token){
      const { password, confirmPassword } = req.body;
      const payload = jwt.verify(token, secrets.JWT_SECRET);
      const user = await userModel.findById(payload.id);
      // console.log(user);
      console.log(password+" "+confirmPassword);
    if (user) {
      user.resetPasswordhandler(password, confirmPassword)
      await user.save();
      res.status(200).json({
        status: "Password reset "
      })

    } else {
      throw new Error("Not a valid token");
    }
  }
  else{
    next();
  }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "Some error occurred",
      err
    })
  }
}

module.exports.login = login;
module.exports.signup = signup;
module.exports.protectRoute = protectRoute;
module.exports.isAuthorized = isAuthorized;
module.exports.forgetPassword = forgetPassword
module.exports.resetPassword = resetPassword;
module.exports.logout=logout;
module.exports.isUserLoggedIn=isUserLoggedIn;
// module.exports.sendEmail = sendEmail;