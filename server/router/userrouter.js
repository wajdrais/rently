const {
  CompleteProfil,
  Signup,
  Signin,
  UpdateProfile,
  Getallusers,
  Getuser,
} = require("../Controller/usercontroller");
const {
  SignupValidation,
  validation,
  SigninValidation,
  NumberComplete,
} = require("../middleware/validation");

const { isAuth } = require("../middleware/IsAuth");

const express = require("express");
const Userrouter = express.Router();
Userrouter.post("/Signup", SignupValidation, validation, Signup);
Userrouter.post("/Signin", SigninValidation, validation, Signin);
Userrouter.put("/Update/:id", UpdateProfile);
Userrouter.put("/Cprofil/:id", NumberComplete, validation, CompleteProfil);
Userrouter.get("/Getusers", Getallusers);
Userrouter.get("/Getoneuser", isAuth, Getuser);

module.exports = Userrouter;
