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
      client.close();
      res.send({
        data: {
          bannerList: bannerList,
          categoryList: categoryList
        }
      });
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Error!" });
  }
});

module.exports = router;
