var express = require("express");
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;

router.get("/", function(req, res, next) {
  res.send({
    data: {
      banner: [1, 2, 3, 3],
      products: [1, 2, 3, 3]
    }
  });
});

module.exports = router;
