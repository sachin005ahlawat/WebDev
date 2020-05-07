// const plans=require("../model/plans.json");
const planModel = require("../model/planModel");

module.exports.createPlan = async function createPlan(req, res) {
  //  json
  const recievedPlan = req.body;
  try {
    let createdPlan = await planModel.create(recievedPlan);
    // send success response to client
    res.status(201).json({
      status: "plan created",
      data: createdPlan,
    });
  } catch (err) {
    res.status(501).json({
      err,
      status: "Internal server error",
    });
  }

  // plan.id = plans.length + 1;
  // plans.push(plan);
  // fs.writeFileSync("./data/plans.json", JSON.stringify(plans));


  //  db
  // promise based model
  // planModel
  //   .create(recievedPlan)
  //   .then(function (createdPlan) {
  //     console.log(createdPlan);
  //     res.status(201).json({
  //       status: "plan created",
  //       data: plan,
  //     });
  //   })
  //   .catch(function (err) {
  //     console.log(err);
  //     res.status(501).json({
  //       status: "Server error",
  //     });
  //   });
};

// homework => done
module.exports.getAllPlans =async function getAllplans(req, res) {
    // let allPlans=req.body;
  try{
    const allPlans = await planModel.find({});
    res.status(200).json({
      status: "all plans recieved",
      data: allPlans,
    });
  }catch(err){
    res.status(404).json({
        status: "Plans Not found",
        err,
      });
  }
};
// done
module.exports.getPlan = async function getPlan(req, res) {
  try {
    // recieve id through params
    const { id } = req.params;
    const plan = await planModel.findById(id);
    res.json({
      status: "successfull",
      data: plan,
    });
  } catch (err) {
    res.status(404).json({
      status: "Plan Not found",
      err,
    });
  }
};

// updatePlan

module.exports.updatePlan = async function updatePlan(req, res) {
  //  identifier => plan
  // const originalPlan = plans[id - 1];
  //fields to be updated in ur plan
  // local
  try {
    const id = req.params.id;
    const toupdateData = req.body;
    // mdb=> express server
    const originalPlan = await planModel.findById(id);
    const keys = [];
    for (let key in toupdateData) {
      keys.push(key);
    }

    // express server => modify
    for (let i = 0; i < keys.length; i++) {
      originalPlan[keys[i]] = toupdateData[keys[i]];
    }
    // express server=> modified=> mdb
   const updatedPlan= await originalPlan.save();

    // fs.writeFileSync("./data/plans.json", JSON.stringify(plans));
    // db********************************************************
    // update DB update =>old plan return
    res.status(200).json({
      status: "update request recieved",
      plan: updatedPlan,
    });
  } catch (err) {
    console.log(err);
    res.status(501).json({
      status: "Plan could not be updated",
      err,
    });
  }
};
// homework =>done
module.exports.deletePlan =async function deletePlan(req, res) {
  const { id } = req.params;
//   fs.writeFileSync("./data/plans.json", JSON.stringify(plans));
const deletedPlan=await planModel.findByIdAndRemove(id,{rawResult:true});
  res.status(200).json({
    status: "Deleted request recieved",
    plan: deletedPlan,
  });
};