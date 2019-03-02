var express = require("express");
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;

router.get("/cart", function(req, res, next) {
  res.send({
    data: {
      products: [
        {
          Id: 0,
          ProductName: "",
          Url: "",
          Price: 0,
          OldPrice: 0,
          Order: 0
        }
      ]
    }
  });
});

router.post("addToCart", function(req, res, next) {
  //mongo insert
  res.send({
    data: {
      status: "ok"
    }
  });
});

router.post("removeFromCart", function(req, res, next) {
  //mongo insert
  res.send({
    data: {
      status: "ok"
    }
  });
});

module.exports = router;
