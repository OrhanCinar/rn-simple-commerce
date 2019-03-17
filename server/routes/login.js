var express = require("express");
var router = express.Router();
var myMongo = require("../config/mymongo");

router.post("/login", function(req, res, next) {
  try {
    var client = myMongo.getClient();
    client.connect((err, client) => {
      myMongo.handleConnection(err);
      const db = client.db(myMongo.dbName);

      var userName = req.params.userName;
      var password = req.params.password;

      db.collection("user").findOne(
        { userName: userName, password: password },
        function(err, user) {
          if (err) {
            res.jsonp({ error: "User Not Found" });
          }

          res.jsonp({
            user: user
          });
        }
      );

      client.close();
    });
  } catch (error) {
    res.status(500).jsonp({ error: "Internal Error!" });
  }
});

router.post("/register", function(req, res, next) {
  try {
    var client = myMongo.getClient();
    client.connect((err, client) => {
      myMongo.handleConnection(err);

      var userName = req.params.userName;
      var password = req.params.password;

      const db = client.db(myMongo.dbName);
      const user = db.collection("user").insertOne({
        userName: userName,
        password: password
      });

      //add user check
      res.jsonp({
        status: "User Registered"
      });

      client.close();
    });
  } catch (error) {
    res.status(500).jsonp({ error: "Internal Error!" });
  }
});

module.exports = router;
