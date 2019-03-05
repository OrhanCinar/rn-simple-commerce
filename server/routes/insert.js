import { getClient } from "../config/mymongo";

var express = require("express");
var router = express.Router();

//Insert Product
router.post("/addProduct", (req, res) => {
  const client = getClient();

  try {
    client.connect((err, client) => {
      handleConnection(err);

      client.product.insertOne({
        name: req.name,
        description: req.description,
        price: req.price,
        oldPrice: req.oldPrice,
        imageUrl: req.imageUrl,
        orderId: 1
      });
    });
  } catch (error) {}
});

//Insert Banner
router.post("/addBanner", (req, res) => {
  const client = getClient();

  try {
    client.connect((err, client) => {
      handleConnection(err);

      client.banner.insertOne({
        name: req.name,
        description: req.description,
        imageUrl: req.imageUrl,
        orderId: 1
      });
    });
  } catch (error) {}
});

module.exports = router;
