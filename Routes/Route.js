let express= require("express");
let { SignUp,Login }=require("../Controller/auth");

let router= express.Router();

router.post("/api/login",Login)
router.post("/api/signup",SignUp)

module.exports=router;
