var express = require("express");
var router = express.Router();
import { getClient } from "../config/mymongo";

router.get("/category", function(req, res, next) {
  var client = getClient();

  try {
    client.connect((err, client) => {
      handleConnection(err);
      const db = getDb();
      const bannerList = db.collection("banner");
      const categoryList = db.collection("category");
      console.log(products);

      res.send({
        data: {
          bannerList: bannerList,
          categoryList: categoryList
        }
      });
    });
  } catch (error) {
    console.log(error);
  }

  client.close();
});

module.exports = router;
