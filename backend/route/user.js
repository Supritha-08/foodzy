const express = require("express");
const router=express.Router();
const{  userSignUp,
    userlogin,
    getUser} = require("../controller/user")

router.post("/signUp",userSignUp)
router.post("/login",userlogin)
router.get("/user/:id",getUser)
module.exports=router

