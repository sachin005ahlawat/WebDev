const planModel=require("../model/planModel");
const userModel=require("../model/userModel");
function getTrialPage(req,res){
    res.render("trial.pug",{
        titleOfThePage:"Trial Page"
    })
}
async function getHomePage(req,res){
    let plans =await planModel.find().limit(3);
    let name=req.userName;
    res.render("home.pug",{
        title:"Home Page",plans,name
    })
}
async function getPlanPage(req,res){
    let plans=await planModel.find();
    let name=req.userName;
    res.render("plansPage.pug",{
        title:"Plan Page",plans,name
    })
}
function getLoginPage(req, res) {
    let name=req.userName;
    res.render("login.pug", {
      title: "Login",name
    })
}
function getSignupPage(req, res) {
    let name=req.userName;
    res.render("signup.pug", {
      title: "Signup",name
    })
}
async function getProfilePage(req,res){
    const user=await userModel.findById(req.id);
    const name=req.userName;
    res.render("profile.pug",{
        title:"Profile Page",
        user,name
    })
}
async function getResetPage(req,res){
    // const user=await userModel.findById(req.id);
    // const name=req.userName;
    res.render("resetPswd.pug",{
        title:"ResetPassword Page",
    })
}
function getManagePlans(req,res){
    let name=req.userName;
    res.render("managePlans.pug",{
        title:"ManagePlans Page",name
    })
}
function getManageUser(req,res){
    let name=req.userName;
    res.render("manageUser.pug",{
        title:"ManageUser Page",name
    })
}
function getCreatePlan(req,res){
    let name=req.userName;
    res.render("createPlan.pug",{
        title:"CreatePlan Page",name
    })
}
function getAllUserPage(req,res){
    let name=req.username;
    res.render("getAllUser.pug",{
        title:"Get All User",name
    })
}


module.exports.getTrialPage=getTrialPage;
module.exports.getHomePage=getHomePage;
module.exports.getPlanPage=getPlanPage;
module.exports.getLoginPage=getLoginPage;
module.exports.getSignupPage=getSignupPage;
module.exports.getProfilePage=getProfilePage;
module.exports.getResetPage=getResetPage;
module.exports.getManagePlans=getManagePlans;
module.exports.getCreatePlan=getCreatePlan;
module.exports.getManageUser=getManageUser;
module.exports.getAllUserPage=getAllUserPage;