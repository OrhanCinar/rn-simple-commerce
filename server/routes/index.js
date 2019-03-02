var express = require("express");
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;

router.get("/", function(req, res, next) {
  res.send({
    data: {
      banner: [{ Id: 0, Url: "", Order: 0 }, { Id: 0, Url: "", Order: 0 }],
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

module.exports = router;
