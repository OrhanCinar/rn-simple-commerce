var express = require("express");
var router = express.Router();
var myMongo = require("../config/mymongo");

router.get("/product/:id", function(req, res, next) {
  console.log("product route hit");
  try {
    var client = myMongo.getClient();
    client.connect((err, client) => {
      myMongo.handleConnection(err);
      const db = client.db(myMongo.dbName);

      const product = db.collection("product").findOne({ id: req.params.id });
      console.log(product);

      res.send({
        data: {
          products: {
            Id: 0,
            ProductName: product.name,
            Url: product.imageUrl,
            Price: product.price,
            OldPrice: product.oldPrice,
            Order: product.orderId,
            Description: product.description
          }
        }
      });
    });
  } catch (error) {
    console.log(error);
  }

  client.close();
});

module.exports = router;
