var express = require("express");
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;

router.post("/login", function(req, res, next) {
  res.send({
    data: {}
  });
});

router.post("/register", function(req, res, next) {
  res.send({
    data: {}
  });
});

module.exports = router;
