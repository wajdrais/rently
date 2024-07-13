const express = require("express");
const {
  Addproduct,
  getallproducts,
  Modifyproductbyowner,
  Modifyproductbyuser,
} = require("../Controller/productcontroller");
const { isAuth } = require("../middleware/isAuth");
const Productrouter = express.Router();

Productrouter.post("/Addproduct", isAuth, Addproduct);
Productrouter.get("/get", getallproducts);
Productrouter.put("/modifybyowner/:id", isAuth, Modifyproductbyowner);
Productrouter.put("/modifybyuser/:id", isAuth, Modifyproductbyuser);

module.exports = Productrouter;
