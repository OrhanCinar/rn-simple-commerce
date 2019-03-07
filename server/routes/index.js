var myMongo = require("../config/mymongo");
var express = require("express");
var router = express.Router();

//List Index
router.get("/", function(req, res, next) {
  console.log("index route hit");
  try {
    var client = myMongo.getClient();
    client.connect((err, client) => {
      myMongo.handleConnection(err);
      const db = client.db(myMongo.dbName);

      const products = db.collection("product");
      const banners = db.collection("banner");
      client.close();
      //console.log("products", products);
      res.send({
        data: {
          banner: banners,
          products: products
        }
      });
    });
  } catch (error) {
    console.log(error);
    req.send("ERROR");
  }
});

module.exports = router;
