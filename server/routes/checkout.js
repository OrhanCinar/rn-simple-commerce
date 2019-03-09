var express = require("express");
var router = express.Router();
var myMongo = require("../config/mymongo");

router.get("/checkout", function(req, res, next) {
  try {
    var client = myMongo.getClient();
    client.connect((err, client) => {
      myMongo.handleConnection(err);
      const db = client.db(myMongo.dbName);
      const products = db.collection("product");

      client.close();
      //should change as list
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
    res.status(500).json({ error: "Internal Error!" });
  }
});

module.exports = router;
