var express = require("express");
var path = require("path");
var router = express.Router();

// Import the model (burger.js)
var burger = require("../models/burger.js");

// section for creating the routes
router.get("/", function(req, res) {
  burger.all(function(data) {
    var burgObj = {
      burgers: data
    };
    console.log(burgObj);
    res.render("index", burgObj);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create([
    "name", "yum"
  ], [
    req.body.name, req.body.yum
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    yum: req.body.yum
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes to server.js
module.exports = router;
