var express = require("express");
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;

router.get("/category", function(req, res, next) {
  res.send({
    data: {
      banner: [{ Id: 0, Url: "", Order: 0 }, { Id: 0, Url: "", Order: 0 }],
      categories: [
        {
          Id: 0,
          Name: "",
          Url: "",
          Order: 0
        }
      ]
    }
  });
});

module.exports = router;
