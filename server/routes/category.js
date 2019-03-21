var express = require("express");
var router = express.Router();
var myMongo = require("../config/mymongo");

router.get("/category", function(req, res, next) {
  console.log("category route hit", req.params);
  try {
    var client = myMongo.getClient();
    client.connect((err, client) => {
      myMongo.handleConnection(err);
      const db = client.db(myMongo.dbName);

      const collCategory = db.collection("category");

      collCategory.find().toArray(function(err, result) {
        if (err) {
          res.status(500).jsonp(err);
        }
        console.log("category count", result.length);
        if (result.length > 0) {
          res.status(200).jsonp({
            data: {
              status: "OK",
              categoryList: result
            }
          });
        }
      });
    });
  } catch (error) {
    res.status(500).jsonp({ error: "Internal Error!" });
  }

  client.close();
});

module.exports = router;
