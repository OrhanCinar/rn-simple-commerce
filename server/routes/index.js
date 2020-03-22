var myMongo = require("../config/mymongo");
var express = require("express");
var router = express.Router();
const cdnPath = "http://192.168.1.13:5000/assets/Products/Images/";

//Get Products
router.get("/products", function(req, res, next) {
  console.log("index route hit");
  try {
    var client = myMongo.getClient();
    client.connect((err, client) => {
      myMongo.handleConnection(err);
      const db = client.db(myMongo.dbName);
      const collProducts = db.collection("product");

      collProducts
        .find()
        .sort({ order: 1 })
        .toArray(function(err, result) {
          if (err) {
            res.status(500).jsonp({
              data: {
                status: "NOTOK"
              }
            });
          }

          if (result.length > 0) {
            result.forEach(item => {
              //console.log(item.imageUrl);
              item.imageUrl = cdnPath.concat(item.imageUrl);
            });
            client.close();
            res.status(200).jsonp({
              data: {
                status: "OK",
                products: result
              }
            });
          }
          //add else condition
        });

      client.close();
    });
  } catch (error) {
    res.status(500).jsonp({ error: "Internal Error!" });
  }
});

//search products
router.get("/product/:q", function(req, res, next) {
  console.log("product route hit", req.params);

  const { q } = req.params;

  if (q === "") {
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

      //console.log("id", id);
      db.collection("product").find({ name: q }, function(err, result) {
        if (err) {
          res.jsonp({
            data: {
              status: "NOTOK",
              message: "Product not found"
            }
          });
        }

        if (result.length > 0) {
          result.forEach(item => {
            //console.log(item.imageUrl);
            item.imageUrl = cdnPath.concat(item.imageUrl);
          });

          res.status(200).jsonp({
            data: {
              status: "OK",
              products: result
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

//Get banners
router.get("/banners", function(req, res, next) {
  console.log("banner route hit");
  try {
    var client = myMongo.getClient();
    client.connect((err, client) => {
      myMongo.handleConnection(err);
      const db = client.db(myMongo.dbName);
      const colBanners = db.collection("banner");

      colBanners.find().toArray(function(err, result) {
        if (err) {
          res.status(500).jsonp(err);
        }

        if (result.length > 0) {
          result.forEach(item => {
            item.imageUrl = cdnPath.concat(item.imageUrl);
          });

          res.status(200).jsonp({
            data: {
              banners: result
            }
          });
        }
        //add else condition
      });

      client.close();
    });
  } catch (error) {
    res.status(500).jsonp({ error: "Internal Error!" });
  }
});

module.exports = router;
