var express = require("express");
var router = express.Router();
import { getClient } from "../config/mymongo";

router.post("/login", function(req, res, next) {
  const client = getClient();

  try {
    client.connect((err, client) => {
      handleConnection(err);
      const db = getDb();
      const user = db.collection("user");
    });
  } catch (error) {}
  client.close();
});

router.post("/register", function(req, res, next) {
  try {
    client.connect((err, client) => {
      handleConnection(err);
      const db = getDb();
      const user = db.collection("user").insertOne();
    });
  } catch (error) {}
  client.close();
});

module.exports = router;
