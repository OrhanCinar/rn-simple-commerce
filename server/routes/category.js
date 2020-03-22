var express = require("express");
var router = express.Router();
var myMongo = require("../config/mymongo");
const cdnPath = "http://192.168.1.13:5000/assets/Icons/";

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
          res.jsonp({
            data: {
              status: "NOTOK",
              message: "Category not found"
            }
          });
        }
        console.log("category count", result.length);
        if (result.length > 0) {
          result.forEach(item => {
            //console.log(item.imageUrl);
            item.imageUrl = cdnPath.concat(item.imageUrl);
          });
          client.close();
          res.status(200).jsonp({
            data: {
              status: "OK",
              categoryList: result
            }
          });
        }
      });
    });
    client.close();
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
