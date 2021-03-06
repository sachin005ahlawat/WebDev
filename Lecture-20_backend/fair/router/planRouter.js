const planRouter = require("express").Router();
const {
  getAllPlans,
  getPlan,
  updatePlan,
  deletePlan,
  createPlan,
} = require("../controller/planController");

const { protectRoute,isAuthorized } = require("../controller/authController");
// const { checkId } = require("../utility/utilityfn");
// planRouter.param("id", checkId);

// admin ,restaurantowner
//createPlan
//updatePlan
//deletePlan

planRouter.use(protectRoute);
planRouter.use(isAuthorized(["admin","restaurantowner"]));
planRouter.post("/createplan",createPlan);

planRouter.route("")
.get(getAllPlans)
.post(protectRoute,createPlan);


planRouter.route("/:id").get(getPlan).patch(protectRoute, updatePlan).delete(protectRoute, deletePlan);
module.exports = planRouter;