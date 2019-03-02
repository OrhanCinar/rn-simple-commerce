var express = require("express");
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;

router.get("/product:id", function(req, res, next) {
  res.send({
    data: {
      products: {
        Id: 0,
        ProductName: "",
        Url: "",
        Price: 0,
        OldPrice: 0,
        Order: 0,
        Description
      }
    }
  });
});

module.exports = router;
