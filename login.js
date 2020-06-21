const express = require("express");
var router = express.Router();

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://crt:crt21@cluster0-16w6b.mongodb.net/test";
router.get("/", (req, res) => {
  res.render("login");
});
router.post("/", async (req, res) => {
  let un = req.body.un;
  let pass = req.body.pass;
  if (un == "admin" && pass == "admin") {
    var fullUrl = req.protocol + "://" + req.get("host") + "/product";
    res.redirect(fullUrl);
  } else {
    res.end("Login failed!");
  }
});
module.exports = router;
