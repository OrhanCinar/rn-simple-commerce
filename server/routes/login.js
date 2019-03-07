var express = require("express");
var router = express.Router();
var myMongo = require("../config/mymongo");

router.post("/login", function(req, res, next) {
  try {
    var client = myMongo.getClient();
    client.connect((err, client) => {
      myMongo.handleConnection(err);
      const db = client.db(myMongo.dbName);
      const user = db.collection("user");
      client.close();
    });
  } catch (error) {}
});

router.post("/register", function(req, res, next) {
  try {
    var client = myMongo.getClient();
    client.connect((err, client) => {
      myMongo.handleConnection(err);
      const db = client.db(myMongo.dbName);
      const user = db.collection("user").insertOne();
      client.close();
    });
  } catch (error) {}
});

module.exports = router;
