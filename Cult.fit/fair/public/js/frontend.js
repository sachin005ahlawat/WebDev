
const d = document;
const stripe = Stripe('pk_test_5diqMXCPkFzg2HYMU3fQV0m800uUbB0BwK');

const paymentBtn = d.querySelector(".payment");
const loginForm = d.querySelector(".login");
const nameBox=d.querySelector(".name-text")
const emailBox = d.querySelector(".email-text");
const passwordBox = d.querySelector(".password-text");
const logout = d.querySelector(".logout");
const forgetPswd=d.querySelector(".forgetpswd");
const resetPswd=d.querySelector(".resetpswd");
const confirmBox=d.querySelector(".confirm-text");
const Signup=d.querySelector(".Signup");
const roleBox=d.querySelector(".role");
const priceBox=d.querySelector(".priceMoney");
const durationBox=d.querySelector(".duration-time");
const discountBox=d.querySelector(".discountMoney");
const ratingBox=d.querySelector(".ratingAverage");
const createPlan=d.querySelector(".createP");
const updateProfile=d.querySelector(".updateProfile");

async function payementHelper(planId) {
  const response = await axios.post("/api/bookings/createSession", { planId });
  if (response.data.status) {
    const { session } = response.data;
    const id = session.id;
    stripe.redirectToCheckout({
      sessionId: id
    }).then(function (result) {
      alert(result.error.message);
    });

  } else {
    alert("Payment failed");
  }
}


async function updateProfileHelper(multipartFormData){
 const response=await axios.patch("api/users/profileImage",multipartFormData);
  if(response.data.status=="data uploaded successfully"){
    alert("Profile Image updated");
    location.reload();
  }
  else{
    alert("some error occured");
  }
}

async function signupHelper(name,email,password,confirmPassword,role) {
  const backendResponse = await axios.post("/api/users/signup", {name,email,password,confirmPassword,role});
  console.log(backendResponse);
  if (backendResponse.data.status === "user Signedup") {
    alert("user Signedup");
    //  frontent browser
    location.assign("/");
  } else {
    alert("Password doesn't match");
  }
}

async function loginHelper(email, password) {
  const backendResponse = await axios.post("/api/users/login", { email, password });
  if (backendResponse.data.status === "userLogged In") {
    alert("user LoggedIn");
    //  frontent browser
    location.assign("/profile");
  } else {
    alert("Wrong Email or password");
  }
}

async function logoutHelper() {
  const backendResponse = await axios.get("/logout");
  if (backendResponse.data.status == "user LoggedOut") {
    // wrong token 
    location.reload();
  } else {
    alert("logout failed");
  }
}

async function forgetHelper(email){
    const backendResponse = await axios.patch("/api/users/forgetPassword",{email});
    if(backendResponse.data.status=="Token send to your email"){
        alert("Link send on ur mail");
    }
    else{
        alert("Invalid Email");
    }
}

async function resetHelper(password,confirmPassword){
  const token= window.location['href'].split("=")[1];
    const backendResponse = await axios.patch("/api/users/resetPassword",{password,confirmPassword,token});
    if(backendResponse.data.status=="Password reset "){
        alert("Password changed");
        location.assign("/login");
    }
    else{
        alert("Try again");
    }
}
async function createPlanHelper(name,duration,price,ratingsAverage,discount){
  const backendResponse = await axios.post("/api/plans/createplan",{name,duration,price,ratingsAverage,discount});
  if(backendResponse.data.status=="plan created"){
      alert("plan created");
      location.assign("/createplan");
      // location.reload();
  }
  else{
      alert("Try again");
  }
}




if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    // default behaviour 
    e.preventDefault();
    const email = emailBox.value;
    const password = passwordBox.value;
    loginHelper(email, password);
  })
}

if (logout) {
  logout.addEventListener("click", function () {
    logoutHelper();
  })
}
if(forgetPswd){
    forgetPswd.addEventListener("click",function(e){
        e.preventDefault();
        const email = emailBox.value;
        forgetHelper(email);
    })
}
if(resetPswd){
    resetPswd.addEventListener("click",function(e){
        e.preventDefault();
        const password=passwordBox.value;
        const confirmPassword=confirmBox.value;
        resetHelper(password,confirmPassword);
    })
}
if(Signup){
  Signup.addEventListener("click",function(e){
      e.preventDefault();
      const name=nameBox.value;
      const email=emailBox.value;
      const password=passwordBox.value;
      const confirmPassword=confirmBox.value;
      const role=roleBox.value;
      signupHelper(name,email,password,confirmPassword,role);
  })
}
if(createPlan){
  createPlan.addEventListener("click",function(e){
    e.preventDefault();
      const name=nameBox.value;
      const duration=durationBox.value;
      const price=priceBox.value;
      const ratingsAverage=ratingBox.value;
      const discount=discountBox.value;
      createPlanHelper(name,duration,price,ratingsAverage,discount);
  })
}

if(updateProfile){
  updateProfile.addEventListener("change",function(e){
    e.preventDefault();
    // capture image so we can send it to backend
    // console.log("change event occured");
    const multipartFormData=new FormData();
    multipartFormData.append("photo",updateProfile.files[0]);
    updateProfileHelper(multipartFormData);
  })
}

if (paymentBtn) {
  paymentBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const planId = paymentBtn.getAttribute("plan-id");
    payementHelper(planId);
  })
}