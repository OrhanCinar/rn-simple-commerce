var express = require("express");
var router = express.Router();
var myMongo = require("../config/mymongo");
var ObjectID = require("mongodb").ObjectID;
const cdnPath = "http://192.168.1.22:5000/assets/Products/Images/";

router.get("/product/:id", function(req, res, next) {
  console.log("product route hit", req.params);

  const { id } = req.params;

  if (id === "0") {
    res.jsonp({
      data: {
        status: "NOTOK",
        product: {}
      }
    });
  }

  try {
    var client = myMongo.getClient();
    client.connect((err, client) => {
      myMongo.handleConnection(err);
      const db = client.db(myMongo.dbName);

      console.log("id", id);
      db.collection("product").findOne({ _id: ObjectID(id) }, function(
        err,
        product
      ) {
        if (err) {
          res.jsonp({
            status: "NOTOK"
          });
        }

        if (product) {
          //console.log(result);
          product.imageUrl = cdnPath.concat(product.imageUrl);
          res.jsonp({
            data: {
              status: "OK",
              product: product
            }
          });
        } else {
          res.jsonp({
            status: "NOTOK"
          });
        }
      });
    });
    client.close();
  } catch (error) {
    res.jsonp(err);
  }
});

module.exports = router;
