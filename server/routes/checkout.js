var express = require("express");
var router = express.Router();
var myMongo = require("../config/mymongo");

router.get("/checkout", function(req, res, next) {
  try {
    // var client = myMongo.getClient();
    // client.connect((err, client) => {
    //   myMongo.handleConnection(err);
    //   const db = client.db(myMongo.dbName);
    //   client.close();
    // });
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
