var express = require("express");
var router = express.Router();
var myMongo = require("../config/mymongo");

router.get("/category", function(req, res, next) {
  try {
    var client = myMongo.getClient();
    client.connect((err, client) => {
      myMongo.handleConnection(err);
      const db = client.db(myMongo.dbName);
      const bannerList = db.collection("banner");
      const categoryList = db.collection("category");

      res.status(200).jsonp({
        data: {
          status: "OK",
          bannerList: bannerList,
          categoryList: categoryList
        }
      });
    });
  } catch (error) {
    res.status(500).jsonp({ error: "Internal Error!" });
  }

  client.close();
});

module.exports = router;
