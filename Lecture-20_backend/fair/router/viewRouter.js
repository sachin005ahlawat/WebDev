const viewRouter = require("express").Router();
const {getTrialPage,getHomePage,getPlanPage,getLoginPage,getSignupPage,getProfilePage,getResetPage,getManagePlans,getCreatePlan,getManageUser,getAllUserPage}=require("../controller/viewController");
const {isUserLoggedIn,protectRoute,logout}=require("../controller/authController");
viewRouter.use(isUserLoggedIn);
viewRouter.get("/",getHomePage);
viewRouter.get("/logout",logout);
viewRouter.get("/plans",getPlanPage);
viewRouter.get("/login",getLoginPage);
viewRouter.get("/signup",getSignupPage);
viewRouter.get("/trials",getTrialPage);
viewRouter.get("/resetPassword",getResetPage);
viewRouter.get("/manageplans",getManagePlans);
viewRouter.get("/manageuser",getManageUser);
viewRouter.get("/createplan",getCreatePlan);
viewRouter.get("/profile",protectRoute,getProfilePage);
viewRouter.get("/getAllUser",getAllUserPage);


module.exports = viewRouter;