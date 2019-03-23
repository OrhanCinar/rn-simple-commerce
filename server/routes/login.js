var express = require("express");
var router = express.Router();
var myMongo = require("../config/mymongo");
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

router.post("/login", jsonParser, function(req, res, next) {
  console.log("login route hit", req.body.userName, req.body.password);
  try {
    var client = myMongo.getClient();
    client.connect((err, client) => {
      myMongo.handleConnection(err);
      const db = client.db(myMongo.dbName);

      var userName = req.body.userName;
      var password = req.body.password;

      db.collection("user").findOne(
        { userName: userName, password: password },
        function(err, user) {
          if (err) {
            res.jsonp({
              data: {
                status: "NOTOK",
                message: "User Not Found"
              }
            });
          }

          if (user) {
            res.jsonp({
              data: {
                status: "OK",
                message: "User Found",
                user: user
              }
            });
          } else {
            res.jsonp({
              data: {
                status: "NOTOK",
                message: "User Not Found"
              }
            });
          }
        }
      );

      client.close();
    });
  } catch (error) {
    res.status(500).jsonp({
      data: {
        status: "OK",
        message: "Internal Error!"
      }
    });
  }
});

router.post("/register", jsonParser, function(req, res, next) {
  console.log("register route hit", req.body.userName, req.body.password);
  try {
    var client = myMongo.getClient();
    client.connect((err, client) => {
      myMongo.handleConnection(err);

      var userName = req.body.userName;
      var password = req.body.password;

      const db = client.db(myMongo.dbName);

      const user = db
        .collection("user")
        .findOne({ userName: userName, password: password }, function(
          err,
          user
        ) {
          if (err) {
            res.jsonp({
              data: {
                status: "NOTOK",
                message: "User Not Registered"
              }
            });
          }
          //user is already registered
          if (user._id !== "") {
            res.jsonp({
              data: {
                status: "NOTOK",
                message: "User Not Registered"
              }
            });
          } else {
            db.collection("user").insertOne(
              {
                userName: userName,
                password: password
              },
              function(err, response) {
                if (err) {
                  res.jsonp({
                    data: {
                      status: "NOTOK",
                      message: "User Not Registered"
                    }
                  });
                }

                if (response.insertedCount > 0) {
                  //add user check
                  res.jsonp({
                    data: {
                      status: "OK",
                      message: "User Registered"
                    }
                  });
                } else {
                  res.jsonp({
                    data: {
                      status: "NOTOK",
                      message: "User Not Registered"
                    }
                  });
                }
              }
            );
          }
        });

      client.close();
    });
  } catch (error) {
    res.status(500).jsonp({
      data: {
        status: "NOTOK",
        message: "Internal Error!"
      }
    });
  }
});

module.exports = router;
