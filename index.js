const express = require("express");
var router = express.Router();

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://crt:crt21@cluster0-16w6b.mongodb.net/test";

router.get("/", async (req, res) => {
  let client = await MongoClient.connect(url);
  let dbo = client.db("storeman");

  let results = await dbo.collection("product").find({}).toArray();
  res.render("index", { product: results });
});

module.exports = router;
