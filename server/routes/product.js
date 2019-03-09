var express = require("express");
var router = express.Router();
var myMongo = require("../config/mymongo");
var ObjectId = require("mongodb").ObjectId;
const cdnPath = "http://localhost:5000/assets/Products/Images/";

router.get("/product/:id", function(req, res, next) {
  console.log("product route hit");
  try {
    var client = myMongo.getClient();
    client.connect((err, client) => {
      myMongo.handleConnection(err);
      const db = client.db(myMongo.dbName);
      //console.log("id", req.params);
      db.collection("product").findOne(
        { _id: ObjectId(req.params.id) },
        function(err, product) {
          if (err) {
            res.jsonp(err);
          }

          if (product) {
            //console.log(result);
            product.imageUrl = cdnPath.concat(product.imageUrl);
            res.jsonp({
              data: {
                product: product
              }
            });
          } else {
            res.jsonp({
              status: "No Product"
            });
          }
        }
      );
    });
    client.close();
  } catch (error) {
    res.jsonp(err);
  }
});

module.exports = router;
