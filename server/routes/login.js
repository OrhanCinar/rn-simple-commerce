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
            res.status.jsonp({ status: "NOTOK", error: "User Not Found" });
          }

          if (user) {
            res.jsonp({
              status: "OK",
              user: user
            });
          } else {
            res.jsonp({
              status: "NOTOK"
            });
          }
        }
      );

      client.close();
    });
  } catch (error) {
    res.status(500).jsonp({ status: "OK", error: "Internal Error!" });
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

      if (user.acknowledged) {
        //add user check
        res.jsonp({
          status: "OK",
          status: "User Registered"
        });
      } else {
        res.jsonp({
          status: "NOTOK",
          status: "User Not Registered"
        });
      }
      client.close();
    });
  } catch (error) {
    res.status(500).jsonp({ status: "NOTOK", error: "Internal Error!" });
  }
});

module.exports = router;
